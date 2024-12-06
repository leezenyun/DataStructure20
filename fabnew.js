var readline = require("readline-sync");
var n = readline.questionInt("Please input an integer: ");
var count = 0;
var dis = fabIterative(n);
console.log(dis);
console.log(dis > 384401000 ? ">" : "<");
console.log(count);

function fabIterative(n) {
    count++;
    if (n <= 1) return 1; // 如果 n 為 0 或 1，直接回傳 1
    let a = 1, b = 1;     // 初始化前兩個 Fibonacci 數值
    for (let i = 2; i <= n; i++) {
        count++;          // 計數每次迭代
        let temp = a + b; // 計算下一個 Fibonacci 數值
        a = b;            // 更新 a 為上一個數值
        b = temp;         // 更新 b 為當前數值
    }
    return b;             // 回傳第 n 個 Fibonacci 數值
}