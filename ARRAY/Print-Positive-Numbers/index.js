function positiveNum(array) {
  let report = {
    count: 0,
    positive: [],
    negative: [],
  };
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      report.count = report.count + 1;
      report.positive.push(array[i]);
    } else {
      report.negative.push(array[i]);
    }
  }
  return report;
}

console.log(positiveNum([1, 2, 3, 4, -5, -6, -7, 8, 0, -4, -3, -2, -1]));
