const b = require("./b.js");
module.exports = (t) => {
  console.log(`我是a-${t}`);
  b("hello");
};
