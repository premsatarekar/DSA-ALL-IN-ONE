function oddNumbers(array) {
  let report = {
    count: 0,
    odd: [],
  };

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      report.count = report.count + 1;
      report.odd.push(array[i]);
    }
  }
  return report;
}

console.log(oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

