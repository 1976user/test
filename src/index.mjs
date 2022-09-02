import { sum, avg } from './sub/index.mjs';

const numbers = [1, 3, 5, 7, 9, 11];

console.log(`Numbers: ${numbers.join(',')}`);
console.log(`Sum: ${sum(...numbers)}`);
console.log(`Avg: ${avg(...numbers)}`);