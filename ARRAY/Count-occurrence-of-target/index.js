function occuranceCount(arr) {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (count[num] === undefined) {
      count[num] = 1;
    } else {
      count[num] = count[num] + 1;
    }
  }
  return count;
}
let result = occuranceCount([1, 2, 3, 4, 4, 5, 3, 5, 6, 7, 8, 93, 4, 5, 2, 1]);
console.log(result);
