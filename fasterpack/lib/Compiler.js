class Compiler {
  constructor(config) {
    this.config = config;
    console.log("config", config);
  }

  run() {
    console.log("run");
  }
}

module.exports = Compiler;
