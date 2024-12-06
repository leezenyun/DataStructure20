function hanoiStack(n, p1, p2, p3) {
    // 定義堆疊
    let stack = [];
    let result = [];

    // 初始化堆疊，將第一個呼叫壓入堆疊
    stack.push({ n: n, from: p1, temp: p2, to: p3, step: 0 });

    // 迴圈直到堆疊為空
    while (stack.length > 0) {
        // 取得堆疊頂端的元素
        let current = stack.pop();

        // 遞迴拆解步驟
        if (current.step === 0) {
            if (current.n === 1) {
                // 基本情況，只有一個圓盤，直接移動
                result.push(`套環 ${current.n} 從 ${current.from} 移到 ${current.to}`);
            } else {
                // 多個圓盤，先將移動分解為三步驟
                stack.push({ n: current.n, from: current.from, temp: current.temp, to: current.to, step: 1 });
                stack.push({ n: current.n - 1, from: current.from, temp: current.to, to: current.temp, step: 0 });
            }
        } else if (current.step === 1) {
            result.push(`套環 ${current.n} 從 ${current.from} 移到 ${current.to}`);
            stack.push({ n: current.n - 1, from: current.temp, temp: current.from, to: current.to, step: 0 });
        }
    }

    // 輸出結果
    result.forEach(move => console.log(move));
}

// 測試
hanoiStack(3, "P1", "P2", "P3");