// 實現泡沫排序法的函式
function bubbleSort(arr) {
  let n = arr.length;

  // 外層迴圈：控制迭代次數
  for (let i = 0; i < n - 1; i++) {
    // 初始化一個旗標，用來檢查是否有交換數字
    let swapped = false;

    // 內層迴圈：比較相鄰的元素
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 如果前一個元素比後一個大，則交換
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // 交換後將旗標設為 true
        swapped = true;
      }
    }
    console.log()
    // 如果在某次迭代中沒有發生交換，表示數組已經排序好，提前結束
    if (!swapped) {
      break;
    }
  }

  return arr;
}

// 測試範例
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("未排序的數列:", numbers);

let sortedNumbers = bubbleSort(numbers);
console.log("排序後的數列:", sortedNumbers);