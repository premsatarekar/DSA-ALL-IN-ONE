function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return printAll;
}

console.log(printAll([10, 20, 30, 40, 50]));
