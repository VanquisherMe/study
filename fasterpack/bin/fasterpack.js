#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
console.log("fasterpack-start", path.resolve("./fasterpack.config.js"));

const config = require(path.resolve("./fasterpack.config.js"));
console.log(config);

class Fasterpack {
  constructor(config) {
    this.config = config;
    this.entry = config.entry;
    this.root = process.cwd();
    this.modules = {};
  }

  pares(code, parent) {
    const deps = [];
    const r = /require\(['"](.*)['"]\)/g;
    code = code.replace(r, function (match, arg) {
      const retPath = path.join(parent, arg.replace(/'|"/g, ""));
      deps.push(retPath);
      return `__fasterpack_require__("./${retPath}")`;
    });

    return { code, deps };
  }
  createModule(modulePath, name) {
    const modulePathKeys = Object.keys(this.modules);
    const fileContent = fs.readFileSync(modulePath, "utf-8");

    if (!modulePathKeys.includes(name)) {
      const { code, deps } = this.pares(fileContent, path.dirname(name));
      this.modules[name] = `function(module,exports,__fasterpack_require__){
        eval('${code}')
    }`;

      deps.forEach((dep) => {
        this.createModule(path.join(this.root, dep), `./${dep}`);
      });
      //生成文件
      this.generateFile();
    }
  }
  generateModuleStr() {
    let fnTemp = "";
    Object.keys(this.modules).forEach((name) => {
      fnTemp += `"${name}":${this.modules[name]},`;
    });
    return fnTemp;
  }
  generateFile() {
    let tempalate = fs.readFileSync(
      path.resolve(__dirname, "../lib/t.js"),
      "utf-8"
    );
    this.tempalate = tempalate
      .replace("__entry__", this.entry)
      .replace("__modules_content__", this.generateModuleStr());
    fs.writeFileSync(`./dist/main.js`, this.tempalate);
    console.log("写入完毕");
  }

  start() {
    console.log("开始解析");
    const entryPath = path.resolve(this.root, this.entry);
    this.createModule(entryPath, this.entry);
    console.log(this.modules);
  }
}

const fasterpack = new Fasterpack(config);
fasterpack.start();
