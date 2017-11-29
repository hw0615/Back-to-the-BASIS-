// 제이쿼리 기본 서식
// 1. 기본 서식
$(document).ready(function() {
  alert('hello jQuery1');
})

// 2. 축약식
$(function {
  alert('hello jQuery2');
})


// 제이쿼리 주요 필터 메서드
.eq()       // 특정 순서의 요소를 선택. 매개 변수에 배열 값으로 지정
.filter()   // 매개 변수에 지정한 이름의 형제요소를 선택
.first()    // 첫 번째 요소를 선택
.last()     // 마지막 요소를 선택
.has()      // 매개 변수에 지정된 요소를 자식 요소로 포함한 요소를 선택


// 제이쿼리 주요 탐색 메서드 
.parent()   // 직계 부모 요소를 선택
.parents()  // 매개 변수에 지정한 이름의 조상을 탐색
.children() // 매개 변수에 지정한 후손을 선택
.find()     // 하위 후손 노드를 찾아 선택
.siblings() // 매개 변수에 지정한 형제 요소를 선택
.prev()     // 이전 형제 요소를 선택
.next()     // 다음 형제 요소를 선택


// 클래스 조작 메서드
.addClass()     // 요소 내에 클래스를 추가
.removeClass()  // 요소 내의 클래스를 제거
.toggleClass()  // 요소 내의 클래스를 번갈아 가며 추가 또는 삭제(토글)


// 속성 조작 메서드
.attr(속성)        // getter - 요소 내의 속성을 읽어 옴
.attr(속성, 값)    // setter - 요소 내의 속성을 추가
.removeAttr(속성) // setter - 요소내의 속성을 제거


// css() 메서드
.css(속성)      // getter - css 속성을 읽어 옴
.css(속성, 값)  // setter - css 속성을 변경


// 문서 정보 조작 메서드
.html()       // getter - 요소 내의 HTML을 읽어 옴
.html(값)      // setter - 요소 내의 HTML을 추가
.text()       // getter - 요소 내의 텍스트 정보를 읽어 옴
.text(값)      // setter - 요소 내의 텍스트 정보를 추가


// 문서 객체 조작 메서드
.append(content)    // 지정한 선택자(요소) 안의 뒤에 추가
.prepend(content)   // 지정한 선택자(요소) 안의 앞에 추가
.after(content)     // 지정한 선택자(요소) 뒤(형제)에 추가
.before(content)    // 지정한 선택자(요소) 앞(형제)에 추가

.appendTo(요소명)    // 지정한 선택자(요소) 안의 뒤에 추가
.prependTo(요소명)   // 지정한 선택자(요소) 안의 앞에 추가



// jQuery 애니메이션
.animation(속성, [재생 시간], [easing], [콜백 함수])