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
  return __faster_require__("__entry__");
})(__modules_content__);
