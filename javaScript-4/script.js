// Operator Aritmatika
let a = 10;
let b = 3;

console.log("a + b = " + (a + b)); // 13
console.log("a - b = " + (a - b)); // 7
console.log("a * b = " + (a * b)); // 30
console.log("a / b = " + (a / b)); // 3.3333
console.log("a % b = " + (a % b)); // 1
console.log("a ** b = " + (a ** b)); // 1000
console.log("++a = " + (++a)); // 11
console.log("--b = " + (--b)); // 2

// Operator Perbandingan
let x = 5;
let y = "5";

console.log("x == y: " + (x == y)); // true
console.log("x === y: " + (x === y)); // false
console.log("x != y: " + (x != y)); // false
console.log("x !== y: " + (x !== y)); // true
console.log("x > 3: " + (x > 3)); // true
console.log("x < 3: " + (x < 3)); // false
console.log("x >= 5: " + (x >= 5)); // true
console.log("x <= 5: " + (x <= 5)); // true

// Operator Logika
let p = true;
let q = false;

console.log("p && q: " + (p && q)); // false
console.log("p || q: " + (p || q)); // true
console.log("!p: " + (!p)); // false
console.log("!q: " + (!q)); // true

// Operator Penugasan
let c = 10;
console.log("c = " + c); // 10
c += 5;
console.log("c += 5 -> " + c); // 15
c -= 3;
console.log("c -= 3 -> " + c); // 12
c *= 2;
console.log("c *= 2 -> " + c); // 24
c /= 4;
console.log("c /= 4 -> " + c); // 6
c %= 4;
console.log("c %= 4 -> " + c); // 2
c **= 3;
console.log("c **= 3 -> " + c); // 8

// Operator typeof
console.log("typeof 'Hello': " + typeof "Hello"); // string
console.log("typeof 100: " + typeof 100); // number
console.log("typeof true: " + typeof true); // boolean
console.log("typeof {}: " + typeof {}); // object
console.log("typeof []: " + typeof []); // object
console.log("typeof null: " + typeof null); // object
console.log("typeof function(){}: " + typeof function(){}); // function

// Operator Ternary
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Status: " + status); // Adult

// Operator Spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 1];
const combined = [...arr1, ...arr2];
console.log("Combined Array: " + combined); // [1,2,3,4,5,6]