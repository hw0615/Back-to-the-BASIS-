class Character {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
  move() {
    document.write(this.name + ' ' + this.job + ' 캐릭터 이동<br>');
  }
}

// 자식클래스 추가
class Monster extends Character {   // Character의 자식클래스 (extends로 상위 클래스 지정)를 추가. 
                                    // 인스턴스 객체는 생성자 함수의 원형에서 복사되어 그 틀대로 재사용하는 것이 목적,
                                    // 하지만 클래스는 그 부모(super)에게서 원형을 상속받아 새로운 형태로 변형된 클래스를 재창조 
  constructor(name, job, skill) {
    super(name, job);               // super()는 상속받은 객체(부모)의 생성자(constructor)를 호출해 자식 클래스인 Monster에 적용
    this.skill = skill;             // 새로운 속성을 추가, 부모 클래스를 바탕으로 Monster 클래스만의 새로운 특징을 부여
  }
  useSkill() {                      // 몬스터가 스킬을 사용할 메서드(useSkill)
    document.write(this.name + ' ' + this.job + ' ' + this.skill + ' 스킬사용<br>');
  }
}

// 인스턴스 객체 생성
let char1 = new Character('루이스', '기사');
let monster = new Monster('오크', '대장', '몽둥이');

// 메서드 실행
char1.move();
monster.useSkill();
monster.move();


// 1. 자바스크립트에서 생성자 함수는 객체를 만들기 위한 원형, 이를 토대로 생성자 함수와 동일한 형태로 만들어진 객체를 인스턴스 객체라고 하며, 이는 클래스의 개념과 유사
// 2. 생성자 함수에 속성을 정의하고 해당 함수의 프로토타입 영역에 메서드를 정의
// 3. 인스턴스 객체들은 개별적인 영역을 가지지만 생성자 함수의 프로토타입 공간은 생성자 함수로 만들어진 인스턴스 객체들이 공유
// 4. 인스턴스 객체는 생성자 함수의 기능을 그대로 빌리는 것에 불과하지만 클래스는 기능의 변형이나 조합이 가능한데, 이를 상속이라 한다.