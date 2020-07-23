/* var buffer1 = new Buffer("ABC");
var buffer2 = new Buffer("ABCD");
var result = buffer1.compare(buffer2);
console.log(result);
if (result < 0) {
  console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if (result == 0) {
  console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
  console.log(buffer1 + " 在 " + buffer2 + "之后");
}
 */

var buffer1 = new Buffer("ABC");
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2, 0, 0, 2);
console.log("buffer2 content: " + buffer2.toString());
