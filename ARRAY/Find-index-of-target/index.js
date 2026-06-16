function targetIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const result = targetIndex([20, 30, 40, 50], 50);
console.log(result);
