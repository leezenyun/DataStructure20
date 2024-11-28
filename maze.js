var MAZE = [ 
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// 定義 Point 類別來表示迷宮中的點
class Point {
  constructor(_row, _col) {
      this.row = _row;  // 行數
      this.col = _col;  // 列數
  }

  // 判斷是否為終點
  isEnd() {
      return this.row == end.row && this.col == end.col;
  }
}

// 設定起點和終點
var start = new Point(1, 1);
var end = new Point(8, 10);

// 使用 Stack 來追蹤路徑
var Stack = [];
var step = start;  // 初始步驟為起點

// 顯示迷宮的函數
function printMaze() {
  console.log("Maze state:");
  MAZE.forEach(row => console.log(row.join(" ")));  // 顯示每一行
  console.log("\n");
}

// 檢查給定的 row 和 col 是否在迷宮範圍內
function check(_row, _col) {
  return (_row >= 0 && _row < MAZE.length && _col >= 0 && _col < MAZE[0].length);
}

// 迷宮求解函數
function go() {
  Stack.push(step);  // 將起點加入 Stack
  MAZE[step.row][step.col] = 2;  // 標記起點為已走過

  // 設定每秒執行一次的邏輯
  const interval = setInterval(() => {
      // 檢查是否已到達終點
      if (step.isEnd()) {
          clearInterval(interval);  // 停止計時器
          console.log("Path found:");
          console.log(Stack.map(point => `(${point.row}, ${point.col})`));  // 顯示解決路徑
          return;
      }

      // 優先向上移動
      if (check(step.row - 1, step.col) && MAZE[step.row - 1][step.col] == 0) {
          step = new Point(step.row - 1, step.col);
          MAZE[step.row][step.col] = 2;  // 標記為已走過
          Stack.push(step);  // 加入 Stack
      } 
      // 如果不能向上，向下移動
      else if (check(step.row + 1, step.col) && MAZE[step.row + 1][step.col] == 0) {
          step = new Point(step.row + 1, step.col);
          MAZE[step.row][step.col] = 2;
          Stack.push(step);
      } 
      // 如果不能向下，向左移動
      else if (check(step.row, step.col - 1) && MAZE[step.row][step.col - 1] == 0) {
          step = new Point(step.row, step.col - 1);
          MAZE[step.row][step.col] = 2;
          Stack.push(step);
      } 
      // 如果不能向左，向右移動
      else if (check(step.row, step.col + 1) && MAZE[step.row][step.col + 1] == 0) {
          step = new Point(step.row, step.col + 1);
          MAZE[step.row][step.col] = 2;
          Stack.push(step);
      } 
      // 如果無法向任何方向移動，退回上一個步驟
      else {
          Stack.pop();  // 彈出當前步驟
          if (Stack.length > 0) {
              step = Stack[Stack.length - 1];  // 回到 Stack 中的上一個步驟
          } else {
              clearInterval(interval);  // 停止計時器
              console.log("No solution!");  // 如果 Stack 為空，代表無解
              return;
          }
      }

      printMaze();  // 每一步都顯示迷宮狀態
  }, 1000);  // 每 1 秒執行一次
}

go();  // 開始執行迷宮求解