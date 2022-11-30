// array, object

var f = function f1(){
  console.log(1+1);
}
f();
var a = [f];
a[0]();

var o = {
  func:f
}
o.func();

// 함수 statement -> 값 -> 변수에 넣을 수 있음

// 반복문은 변수에 넣으면 에러 발생
// var i = if(true){
//   console.log(1);
// }
//
// var w = while(true){
//   console.log(1);
// }
