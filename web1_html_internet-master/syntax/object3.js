var v1 = 'v1';
// 10000 code
v1 = 'egoing';
var v2 = 'v2';

// folder 기능 => grouping
var q = {
  v1:'v1',
  v2:'v2',
  f1:function f1(){
    console.log(this.v1); // this: 함수가 속해있는 객체를 참조할 때 사용
  },
  f2:function f2(){
    console.log(this.v2);
  }
}

q.f1();
q.f2();

// 객체는 값을 저장하는 그릇이다.
