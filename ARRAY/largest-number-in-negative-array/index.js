function largestNegative(arr) {
  let largestNegativeNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNegativeNum) {
      largestNegativeNum = arr[i];
    }
  }
  return largestNegativeNum;
}
console.log(largestNegative([-5, -2, -10, -1]));
