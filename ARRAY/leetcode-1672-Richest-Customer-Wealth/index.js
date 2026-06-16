function richestWealth(accounts) {
  let maximumWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let currentWealth = 0;

    for (let j = 0; j < accounts[i].length; j++) {
      currentWealth += accounts[i][j];
    }

    maximumWealth = Math.max(maximumWealth, currentWealth);
  }

  return maximumWealth;
}

const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

// Memory before function execution
const beforeMemory = process.memoryUsage();

// Time before function execution
const startTime = performance.now();

// Function execution
const result = richestWealth(accounts);

// Time after function execution
const endTime = performance.now();

// Memory after function execution
const afterMemory = process.memoryUsage();

// Calculate execution time
const executionTime = endTime - startTime;

// Calculate memory difference
const heapMemoryUsed =
  afterMemory.heapUsed - beforeMemory.heapUsed;

const rssMemoryUsed =
  afterMemory.rss - beforeMemory.rss;

console.log('Richest wealth:', result);

console.log(
  'Execution time:',
  executionTime.toFixed(6),
  'ms'
);

console.log(
  'Heap memory used:',
  heapMemoryUsed,
  'bytes'
);

console.log(
  'Heap memory used:',
  (heapMemoryUsed / 1024).toFixed(4),
  'KB'
);

console.log(
  'Heap memory used:',
  (heapMemoryUsed / 1024 / 1024).toFixed(6),
  'MB'
);

console.log(
  'RSS memory difference:',
  (rssMemoryUsed / 1024 / 1024).toFixed(6),
  'MB'
);

console.log(
  'Total heap used after execution:',
  (afterMemory.heapUsed / 1024 / 1024).toFixed(4),
  'MB'
);

console.log(
  'Total Node.js process memory:',
  (afterMemory.rss / 1024 / 1024).toFixed(4),
  'MB'
);