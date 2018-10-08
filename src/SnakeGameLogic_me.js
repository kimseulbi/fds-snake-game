import { ROWS, COLS } from "./config";

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

// o 화살표 키를 눌렀을 때 뱀이 움직이도록 만들어보세요.
// o 화살표 키를 눌렀을 때 뱀이 자연스럽게 움직이도록 만들어보세요(힌트: 꼬리를 떼서 머리 앞에 갖다붙이면..?)
// o 화살표 키를 누르지 않아도 주기적으로 뱀이 움직이도록 만들어보세요. (힌트 1: 방금 전에 무슨 키를 눌렀더라..? 힌트 2: `nextState`가 언제 호출되는지 알아보기 위해 개발자 도구의 콘솔을 확인하세요!)
// o 먹이를 먹었을 때 뱀의 길이가 늘어나게 만들어보세요. (힌트: 꼬리를 떼지 않으면..?)
// o 먹이를 먹었을 때 다른 곳에 먹이가 생성되게 만들어보세요.
// o 뱀의 머리가 벽에 부딪혔을 때 게임이 끝나게 만들어보세요.
// o 뱀의 머리가 자기 몸에 부딪혔을 때 게임이 끝나도록 만들어보세요.
// o 설정 파일(config.js)를 편집해 게임 난이도를 바꾸어보세요.
// o 먹이가 뱀의 몸과 겹쳐져 생성되는 일이 없게 만들어보세요.

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];

  // 먹이의 좌표
  this.fruit = { x: 3, y: 5 };

  // 키보드를 누르지 않아도 이동할 수 있도록 방향 상태를 저장
  this.direction = "right";
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "up";
};

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "down";
};

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "left";
};

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "right";
};

SnakeGameLogic.prototype.nextState = function() {
  console.log(`nextState`);
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  let newHead;
  // 새로운 사과 위치 저장
  let newFruit = {};
  console.log("new", newHead);
  if (this.direction === "up") {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y - 1
    };
  } else if (this.direction === "down") {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y + 1
    };
  } else if (this.direction === "left") {
    newHead = {
      x: this.joints[0].x - 1,
      y: this.joints[0].y
    };
  } else if (this.direction === "right") {
    newHead = {
      x: this.joints[0].x + 1,
      y: this.joints[0].y
    };
  }
  // 새로운 머리와 사과위치랑 같은 경우
  if (newHead.x === this.fruit.x && newHead.y === this.fruit.y) {
    // 내부 코드를 무조건 한 번은 실행시킨다는 차이점
    // 새로운 사과를 랜덤으로 위치를 정해 옮긴다.
    do {
      newFruit.x = Math.floor(Math.random() * COLS);
      newFruit.y = Math.floor(Math.random() * ROWS);
      this.fruit = newFruit;
    } while ( //while (false);
    // 새로운 사과랑 새로운 머리가 같은 위치 
    // 새로운 사과랑 배열 요소중 하나랑 같은 위치인 경우 false
      (newFruit.x === newHead.x && newFruit.y === newHead.y) ||
      this.joints.some(
        joint => joint.x === newFruit.x && joint.y === newFruit.y
      )
    );
  } else {
    // 조건에 해당이 안되면 하나씩 짤린다.
    this.joints.pop();
  }

  // 머리와 몸통이 부딪치면 게임아웃
  // 게임영역에서 벗어나면 게임아웃
  if (
    newHead.y >= ROWS ||
    newHead.y < 0 ||
    newHead.x >= COLS ||
    newHead.x < 0 ||
    this.joints.some(joint => joint.x === newHead.x && joint.y === newHead.y)
  ){
    return false;
  }
    // new머리는 계속 생성 왜냐면 nextState이 계속 실행 되면서 right으로 설정 되어있기 떄문
    this.joints.unshift(newHead);
  console.log('newHead: ',newHead);
  return true;
};

export default SnakeGameLogic;
