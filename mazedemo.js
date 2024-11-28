// 迷宮的結構，1 代表牆壁，0 代表可通行的路徑
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

// Point 類別用來表示迷宮中的一個點，包含行列信息
class Point {
    constructor(_row, _col) {
        this.row = _row;  // 行數
        this.col = _col;  // 列數
    }

    // 判斷當前點是否為終點
    isEnd(end) {
        return this.row === end.row && this.col === end.col;
    }
}

// 設定起點和終點
var start = new Point(1, 1); // 起點為 (1,1)
var end = new Point(8, 10); // 終點為 (8,10)

// 顯示迷宮的函數
function printMaze() {
    let mazeHtml = '<table>'; // 開始生成表格
    for (let i = 0; i < MAZE.length; i++) {
        mazeHtml += '<tr>'; // 開始一行
        for (let j = 0; j < MAZE[i].length; j++) {
            let cellClass = ''; // 設置單元格的樣式
            if (MAZE[i][j] === 1) {
                cellClass = 'wall'; // 牆壁
            } else if (MAZE[i][j] === 2) {
                cellClass = 'path'; // 已走過的路徑
            } else if (i === start.row && j === start.col) {
                cellClass = 'start'; // 起點
            } else if (i === end.row && j === end.col) {
                cellClass = 'end'; // 終點
            }
            mazeHtml += `<td class="${cellClass}"></td>`; // 添加一個單元格
        }
        mazeHtml += '</tr>'; // 結束一行
    }
    mazeHtml += '</table>'; // 結束表格
    document.getElementById('maze-container').innerHTML = mazeHtml; // 更新迷宮顯示區域
}

// 檢查給定的行列是否在迷宮範圍內
function check(_row, _col) {
    return (_row >= 0 && _row < MAZE.length && _col >= 0 && _col < MAZE[0].length);
}

// 進行迷宮尋路的邏輯
function go() {
    Stack.push(step); // 起點加入 Stack，開始尋路
    MAZE[step.row][step.col] = 2; // 標記起點為已走過
    visited[step.row][step.col] = true; // 記錄為已訪問

    const interval = setInterval(() => {
        // 如果到達終點，停止計時並顯示訊息
        if (step.isEnd(end)) {
            clearInterval(interval); // 停止計時器
            console.log("已找到路徑:");
            console.log(Stack.map(point => `(${point.row}, ${point.col})`));

            // 顯示終點訊息
            document.getElementById('end-message').style.display = 'block';
            return;
        }

        // 隨機選擇方向（上、下、左、右）
        const directions = [
            { row: -1, col: 0 },  // 向上
            { row: 1, col: 0 },   // 向下
            { row: 0, col: -1 },  // 向左
            { row: 0, col: 1 }    // 向右
        ];

        // 隨機排序方向
        directions.sort(() => Math.random() - 0.5);

        let moved = false;
        for (let dir of directions) {
            const newRow = step.row + dir.row;
            const newCol = step.col + dir.col;

            // 如果可以走，則向該方向移動
            if (check(newRow, newCol) && MAZE[newRow][newCol] === 0 && !visited[newRow][newCol]) {
                step = new Point(newRow, newCol);
                MAZE[step.row][step.col] = 2; // 標記為已走過
                visited[step.row][step.col] = true;
                Stack.push(step); // 將新位置加入 Stack
                moved = true;
                break;
            }
        }

        // 如果無法移動，則回退
        if (!moved) {
            Stack.pop();
            if (Stack.length === 0) {
                clearInterval(interval);
                console.log("沒有解決方案!"); // 無解
                return;
            }
            step = Stack[Stack.length - 1];
        }

        printMaze(); // 更新迷宮顯示
    }, 1000); // 每 1 秒執行一次
}

// 當按下「開始尋路」按鈕時，初始化並開始尋路
function startPathfinding() {
    Stack = []; // 清空 Stack
    visited = Array.from({ length: MAZE.length }, () => Array(MAZE[0].length).fill(false)); // 重置已訪問陣列
    step = start; // 設定起點
    printMaze(); // 顯示迷宮
    document.getElementById('end-message').style.display = 'none'; // 隱藏終點訊息
    go(); // 開始尋路
}