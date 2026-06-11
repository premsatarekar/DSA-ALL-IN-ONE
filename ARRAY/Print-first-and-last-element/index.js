function firstandlast(arr) {
  if (arr === 0) {
    console.log('The array is empty');
    return;
  }

  const first = arr[0];
  const last = arr.length - 1;

  console.log(`the first element = ${first}`);
  console.log(`the last element = ${last}`);
}

firstandlast([1, 2, 3, 4]);
