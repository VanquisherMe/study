(function () {
  const installModules = {};
  function __faster_require__(moduleId) {
    //是否缓存
    if (installModules[moduleId]) {
      return installModules[moduleId].exports;
    }
    let modules = (installModules[moduleId] = {
      exports: {},
    });
    modules[moduleId].call(
      modules.exports,
      module,
      exports,
      __faster_require__
    );
    return module.exports;
  }
  //入口
  return __faster_require__("./index.js");
})("./index.js":function(module,exports,__fasterpack_require__){
        eval('const a = __fasterpack_require__("./js/a.js");
console.log("入口1你好");

a("hi");
')
    },"./js/a.js":function(module,exports,__fasterpack_require__){
        eval('const b = __fasterpack_require__("./js/b.js");
module.exports = (t) => {
  console.log(`我是a-${t}`);
  b("hello");
};
')
    },"./js/b.js":function(module,exports,__fasterpack_require__){
        eval('const a = __fasterpack_require__("./js/a.js");
module.exports = (t) => {
  console.log(`我是b-${t}`);
  a("hello");
};
')
    },);
