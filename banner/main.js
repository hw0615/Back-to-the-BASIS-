var banner = documemt.getElementById('banner'),
    img = banner.getElementByTagName('img'),
    toggle = document.getElementById('toggle'),
    sound_btn = document.getElementById('sound_btn');

var banner_height = getComputedStyle(banner).height;
var cast = [];

// 풍선 객체 생성 함수 
function set_balloon(num) {
  // 풍선의 속성 값을 랜덤으로 생성
  var x = Math.floor(Math.random() * (500 - 10) + 10), // 10에서 500 사이의 값
      y = Math.floor(Math.random() * (400 - 120) + 120),
      size = Math.floor(Math.random() * (200 - 100) + 100),
      angle = Math.floor(Math.random() * (360 - 0) + 0),
      speed = Math.random() * (2 - 0) + 0;

  // 풍선 객체
  cast[num] = {
    x : x,          // 풍선의 x 좌표
    y : -y,         // 풍선의 y 좌표 (배너 상단 밖에서 출현하므로 -값 적용)
    size: size,     // 풍선의 크기
    angle: angle,   // 풍선의 초기 회전 각도 값
    speed: speed    // 풍선이 떨어지는 속도 
  };
}