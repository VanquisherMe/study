const a = require("./a.js");
module.exports = (t) => {
  console.log(`我是b-${t}`);
  a("hello");
};
