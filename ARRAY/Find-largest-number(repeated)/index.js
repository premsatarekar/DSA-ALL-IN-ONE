function largestNum(array) {
  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

console.log(largestNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
