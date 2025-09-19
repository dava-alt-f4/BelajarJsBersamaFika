// Array tanpa destructuring
const array = [1, 2, 3, 4, 5];
const first = array[0];
const second = array[1];
const third = array[2];
console.log(first, second, third); // Output: 1 2 3

// Array dengan destructuring
const [a, b, c] = array;
console.log(a, b, c); // Output: 1 2 3

// Skip item dalam array
const [x, , y] = array;
console.log(x, y); // Output: 1 3

// destructuring + rest pada array
const [pertama, kedua, ...sisanya] = array;
console.log(pertama); // Output: 1
console.log(...sisanya); // Output: [3, 4, 5]

// Object tanpa destructuring
const person = { name: 'Alice', age: 25, city: 'Wonderland' };
const name = person.name;
const age = person.age;
console.log(name, age); // Output: Alice 25

// Object dengan destructuring
const { name: nama, age: usia } = person;
console.log(nama, usia); // Output: Alice 25

// mengganti nama variabel dengan destructuring
const { city: kota } = person;
console.log(kota); // Output: Wonderland

// destructuring + rest pada object
const { name: namaDepan, ...lainnya } = person;
console.log(namaDepan); // Output: Alice

// Restructuring object
const username = 'Adis';
const userage = 30;
const user = { username, userage };
console.log(user); // Output: { username: 'Adis', userage: 30 }

// Restructuring pada array
const angka1 = 10;
const angka2 = 20;
const angka3 = 30;
const angkaArray = [angka1, angka2, angka3];
console.log(angkaArray); // Output: [10, 20, 30]