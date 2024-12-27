// 實現合併排序的函式
function mergeSort(arr) {
    // 如果陣列的長度為1或以下，則不需要排序，直接返回
    if (arr.length <= 1) {
      return arr;
    }
  
    // 找到中間點，將陣列拆分為左右兩部分
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // 遞迴拆分和合併排序
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // 合併左右兩部分
    return merge(sortedLeft, sortedRight);
  }
  
  // 合併兩個子陣列的函式
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
  
    // 比較左右陣列的元素，依序加入結果陣列
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // 將剩下的元素加入結果陣列
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    return result;
  }
  
  // 測試範例
  let numbers = [38, 27, 43, 3, 9, 82, 10];
  console.log("未排序的數列:", numbers);
  
  let sortedNumbers = mergeSort(numbers);
  console.log("排序後的數列:", sortedNumbers);