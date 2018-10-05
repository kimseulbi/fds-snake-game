import { ROWS, COLS } from "./config";

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];

  // 먹이의 좌표
  this.fruit = { x: 3, y: 5 };
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표를 눌렀을때 머리기준으로 꼬리가 올라간다.
  // 위쪽 화살표 키를 누르면 실행되는 함수
  const lastTail = this.joints.pop()
  //마지막꺼  뒤에 붙인다
  this.joints.push(lastTail);
  console.log(this.joints);
  // 첫번째 꺼 
  const tail = this.joints.shift()
  console.log(tail)
  // 위치를 바꿔준 후
  tail.x = lastTail.x;
  tail.y = lastTail.y - 1
  // x축으로 붙인다.
  this.joints.push(tail);
  console.log(this.joints)
  // console.log("up");
};

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표를 눌렀을때 머리기준으로 꼬리가 내려간다.
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  const tail = this.joints.pop()
  tail.x = this.joints[0].x
  tail.y = this.joints[0].y + 1
  console.log(tail)
  this.joints.unshift(tail);
  console.log(this.joints)
  // console.log("down");
};

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  // 마지막 꺼
  const lastTail = this.joints.pop()
  //마지막꺼  뒤에 붙인다
  this.joints.push(lastTail);
  console.log(this.joints);
  // 첫번째 꺼 
  const tail = this.joints.shift()
  console.log(tail)
  // 위치를 바꿔준 후
  tail.x = lastTail.x - 1
  tail.y = lastTail.y;
  // x축으로 붙인다.
  this.joints.push(tail);
  console.log(this.joints)
};

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  const tail = this.joints.pop();
  console.log(tail);
  // 위치를 바꿔준 후
  // x축으로 붙인다.
  tail.x = this.joints[0].x + 1;
  tail.y = this.joints[0].y;
  console.log(tail);
  // 머리 앞에 갖다 붙인다!
  this.joints.unshift(tail);
  console.log(this.joints);
};

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
  return true;
};

export default SnakeGameLogic;
