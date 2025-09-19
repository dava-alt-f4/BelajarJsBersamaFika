// template literals
let name = "John";
let greeting = `Hello, my name is ${name}`;
console.log(greeting); // Output: Hello, my name is John

// interpolasi vaariabel
let orang = "Doe";
let pekerjaan = "developer";
let deskripsi = `${orang} is a ${pekerjaan}`;
console.log(deskripsi); // Output: Doe is a developer

// Expression dalam template literals
let a = 5;
let b = 10;
let hasil = `The sum of ${a} and ${b} is ${a + b}`;
console.log(hasil); // Output: The sum of 5 and 10 is 15

// Multi-line strings
let multiLine = `This is line one.
This is line two.
This is line three.`;
console.log(multiLine);
// Output: This is line one.
// This is line two.
// This is line three.

// HTML fragments
let title = "Welcome";
let htmlFragment = `
  <h1>${title}</h1>
  <p>This is a simple HTML fragment.</p>
`;
console.log(htmlFragment);

