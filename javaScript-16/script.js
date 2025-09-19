// Import dari named export
import { add, subtract } from './math.js';

console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3));   // Output: 2

// Import dari named export dengan alias
import * as MathOperations from './math.js';

console.log(MathOperations.add(10, 4)); // Output: 14
console.log(MathOperations.subtract(10, 4)); // Output: 6

// Import dari default export
import greet from './greet.js';

console.log(greet('Alice')); // Output: Hello, Alice!

