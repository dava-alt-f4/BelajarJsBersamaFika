// Var data type
var name = "Alice";
console.log("My name is " + name);
var name = "Bob"; // var bisa di redeclare
console.log("My new name is " + name);

// Let data type
let age = 25;
console.log("My age is " + age);
// let age = 30; // Error: Identifier 'age' has already been declared
age = 30; // let bisa di reassign
console.log("My new age is " + age);

// Const data type
const birthYear = 1998;
console.log("My birth year is " + birthYear);
// const birthYear = 2000; // Error: Identifier 'birthYear' has already been declared
// birthYear = 2000; // Error: Assignment to constant variable
const fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date"); // array dalam const bisa diubah isinya
console.log("My fruits are: " + fruits.join(", "));