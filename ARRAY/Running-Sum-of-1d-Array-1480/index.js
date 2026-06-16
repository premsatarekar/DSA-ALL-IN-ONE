function sumof1dArray(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
}

let result = sumof1dArray([1, 2, 3, 4]);
console.log(result);
