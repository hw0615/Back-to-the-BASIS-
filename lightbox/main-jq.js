$(function (){
  
  // 변수 초기화
  var $indicator = $('.indicator button');
  var $lightbox = $('#lightbox');
  var $block = $('#block'); 
  
  // 라이트 박스 표시
  function lightbox_open(num) {
    $lightbox.addClass('active'); // setAttribute() 대신 addClass() 함수로 클래스 속성만 추가
    $block.addClass()('active');
    change_img(num);
    $indicator.eq(num).focus(); // eq() - 지정된 요소의 위치를 탐색하는 메서드, 즉 인디케이터의 배열 순서
  }
  
  // 라이트 박스 닫기
  function lightbox_close() {
    $lightbox.removeAttr('class') // removeAttribute --> removeAttr
    $block.removeAttr('class')
  }
  
  // 이미지 전환 표시 함수
  function change_img(val) {
    var $imgs = $('figure > img');

    for ( var i = 0; i < $imgs.length; i++ ) {
      $imgs.eq(i).removeAttr('class');
    }
    $imgs.eq(val).attr('class', 'active');
  }

  // 이미지 목록 click 이벤트, 라이트 박스 열기
  $('img.thumb').click(function() {
    var img_num = $(this).index() -1; // index() - 현재 이미지 객체의 배열 번호를 반환
    lightbox_open(img_num)
  });

  // 라이트 박스 닫기 버튼 click 이벤트
  $('.btn-close').click(function(){
    lightbox_close();
  });

  // 인디케이터 클릭 시 click 이벤트, 라이트 박스 이미지 변경
  $indicator.click(function() {
    var img_num = $(this).index();
    change_img(img_num);
  });
  
})();