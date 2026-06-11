function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], ` = the index of ${arr[i]} array is ${i}`);
  }
  return printAll;
}

console.log(printAll([10, 20, 30, 40, 50]));
