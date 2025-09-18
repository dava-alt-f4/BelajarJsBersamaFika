// menyebar array dengan spread operator
const arr1 = [1, 2, 3];
console.log(...arr1); // Output: 1 2 3

// array tanpa spread operator
const arr2 = [4, 5, 6];
console.log(arr2); // Output: [4, 5, 6]

// menggabungkan dua array dengan spread operator
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// menyalin array dengan spread operator
const copiedArr = [...arr1];
console.log(copiedArr); // Output: [1, 2, 3]

// Object literal dengan spread operator
const user = { name: 'Alice', age: 25 };
const updatedUser = { ...user, job: 'Developer' }; // menambahkan properti baru
console.log(updatedUser); // Output: { name: 'Alice', age: 25, job: 'Developer' }

// spread operator pada function arguments
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6