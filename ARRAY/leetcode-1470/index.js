const shuffle = function (nums, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
};

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;

// Memory before function execution
const beforeMemory = process.memoryUsage().heapUsed;

// Time before function execution
const startTime = performance.now();

// Function execution
const answer = shuffle(nums, n);

// Time after function execution
const endTime = performance.now();

// Memory after function execution
const afterMemory = process.memoryUsage().heapUsed;

// Calculations
const executionTime = endTime - startTime;
const memoryUsed = afterMemory - beforeMemory;

// Output
console.log('Answer:', answer);

console.log(`Execution time: ${executionTime.toFixed(6)} ms`);

console.log(`Memory used: ${memoryUsed} bytes`);

console.log(`Memory used: ${(memoryUsed / 1024).toFixed(4)} KB`);

console.log(`Memory used: ${(memoryUsed / 1024 / 1024).toFixed(6)} MB`);
