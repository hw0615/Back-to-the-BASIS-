var banner = document.getElementById('banner'),
    img = banner.getElementsByTagName('img'),
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

// // // 1부터 10까지 난수 발생
// var r = Math.random() * 10 + 1; // random() 메서드에 곱한 숫자만큼 난수 발생, 난수의 범위는 0부터 시작하므로 1을 더해야 한다.
// document.write(r + '<br>');
// document.write(Math.floor(r) + '<br>');
// document.write(Math.ceil(r) + '<br>');
// document.write(Math.round(r) + '<br>');

// // 10에서 500 사이의 난수 발생
// var min = 10,
//     max = 500;
// var r2 = Math.floor(Math.random() * (max - min) + min);
// document.write(r2 + '<br>')


// 풍선 객체 초기화 함수
function ball_init() {
  for ( var i = 0; i < img.length; i++ ){
    set_balloon(i);
    img[i].style.left = '-9999px';
    img[i].style.top = '-9999px';
  }
}
ball_init();

// 풍선 애니메이션 함수
function animate_balloon() {
  for ( var i = 0; i < img.length; i++ ) {
    // 풍선 속성 변경
    img[i].style.left = cast[i].x + 'px'; // x 좌표
    img[i].style.top = cast[i].y + 'px'; // y 좌표
    img[i].style.transform = 'rotate(' + cast[i].angle + 'deg)'; // 회전

    // 풍선이 화면 안에 있으면
    if ( cast[i].y < parseInt(banner_height)) {
      cast[i].y += 1 + cast[i].speed;
      cast[i].angle += cast[i].speed;
    } else { // 풍선이 화면 밖으로 나가면
      set_balloon(i)
    }
  }
}

function bgm_init() {
  var bgm = new Audio();
  bgm.src = 'images/bgm.mp3';
  bgm.loop = true;
  document.body.appendChild(bgm);
}

/* ---------------------------------------- */
// 메인
ball_init();
setInterval(function() {
  animate_balloon();
}, 1000/30);
bgm_init();

/* ---------------------------------------- */
// 사운드 버튼 이벤트 핸들러
sound_btn.onclick = function() {
  var attr = sound_btn.getAttribute('class');       // 사운드 버튼의 class 속성
  var bgm = document.getElementsByTagName('audio')  // audio 객체

  if (attr === 'active') {
    // 사운드 off
     sound_btn.removeAttribute('class');                    // 클래스 제거
     sound_btn.setAttribute('src', 'images/sound_off.png'); // 버튼 이미지 교체
     bgm[0].pause();  // bgm 정지
  } else {
    // 사운드 on
    sound_btn.setAttribute('class', 'active');
    sound_btn.setAttribute('src', 'images/sound_on.png');
    bgm[0].play();  // bgm 재생

  }
}
