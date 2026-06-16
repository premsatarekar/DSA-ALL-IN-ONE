function targetExist(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

const result = targetExist([20, 30, 40, 50], 30);
console.log(result);
