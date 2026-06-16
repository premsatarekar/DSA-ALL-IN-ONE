function concatination(arr1, arr2) {
  let result1 = [...arr1, ...arr2];
  return result1;
}

let result = concatination([1, 2, 1], [1, 2, 1]);
console.log(result);
