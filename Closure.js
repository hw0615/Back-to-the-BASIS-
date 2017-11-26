// 클로저란 자바스크립트의 독특한 문법으로, 함수 내의 함수와 그 안에 있는 변수를 다루는 부분.



// 유효 범위
var globalValue = 20;   // 전역 변수

function testFunc() {
  var localValue = 10;  // 지역 변수
  document.write('globalValue = ' + globalValue + '<br>');  // 20
  document.write('localValue = ' + localValue + '<br>');  // 10
}

testFunc();
document.write('globalValue = ' + globalValue + '<br>');  // 20
document.write('localValue = ' + localValue + '<br>');  // error



// 정적 변수를 위한 클로저

// 지역변수
function outFunc() {
  var localValue = 0;   // 지역 변수

  localValue++;         // 1씩 증가
  return localValue;    // 값을 리턴
}

document.write(outFunc() + '<br>');   // 1
document.write(outFunc() + '<br>');   // 1
document.write(outFunc() + '<br>');   // 1    // 함수 내의 변수는 함수 내에서만 실행되고 종료되면 모두 소멸


// 클로저 함수
function outFunc() {
  var staticValue = 0;    // 지역 변수지만 정적 변수로 사용

  // 내부 함수(클로저)
  function inFunc(val) {
    var a = val || 1;     // 매개 변수 val을 a에 대입 (값이 없으면 1)
    return staticValue += a;    // 정적 변수 값 리턴
  }

  return inFunc;          // 함수를 리턴
}

var c = outFunc();        // 클로저 함수를 리턴받음
document.write(c() + '<br>');  // 1
document.write(c() + '<br>');  // 2
document.write(c() + '<br>');  // 3

// 전역 변수와 정적 변수의 사용 목적은 분명히 다르다. 전역 변수와 달리 정적 변수는 
// 함수 내에서만 사용(외부에서 변경 불가)할 목적으로 만든 유틸리티 변수(예를 들면 객체나 클래스의 속성 값)이기 때문.




// for문과 클로저
var arr = [];

for ( var i = 0; i < 3; i++ ) {
  arr[i] = function() {
    return i;
  }
  console.log(arr[i]());    // 0 1 2
}
// for문 종료 후 배열 함수 실행
document.write(arr[0]() + '<br>');    // 3
document.write(arr[1]() + '<br>');    // 3
document.write(arr[2]() + '<br>');    // 3
// 클로저가 arr[]에 지정한 함수가 되었기 때문에 3만 출력
// 클로저가 여러개 만들어 졌지만 각 클로저는 하나의 환경을 공유(클로저 함수 내의 변수 i가 for문의 변수 마지막 값을 참조)

// for문과 클로저 - 수정1
var arr = [];

for ( var i = 0; i < 3; i++ ) {
  (function(x){
    arr[x] = function() {
      return x;
    }
  })(i);    // 익명 함수
}
document.write(arr[0]() + '<br>');    // 0
document.write(arr[1]() + '<br>');    // 1
document.write(arr[2]() + '<br>');    // 2
// for문 안의 처리문을 즉시 실행 익명 함수로 분리(함수 스코프)시키고
// 클로저가 for문의 i가 아닌 익명 함수의 변수를 참조하도록 한 것.

// for문과 클로저 - 수정2 (ES6 let 변수 사용)
var arr = [];

for ( let i = 0; i < 3; i++ ) {
  let x = i;
  arr[x] = function() {
    return x;
  }
}
document.write(arr[0]() + '<br>');    // 0
document.write(arr[1]() + '<br>');    // 1
document.write(arr[2]() + '<br>');    // 2
// let 키워드로 변수를 선언하면 변수의 스코프가 블록 단위(기존에는 함수 단위 적용)로 엄격해진다.




