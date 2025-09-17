// If statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} // Output: You are an adult.

// If-else statement
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
} // Output: You are a minor.

// If-else if-else statement
if (age < 13) {
    console.log("You are a child.");
} else if (age < 18) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
} // Output: You are an adult.

// Switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
} // Output: Wednesday

// Loops - For loop
for (let i = 1; i <= 5; i++) {
    console.log("iteration " + i);
} // Output: iteration 1, iteration 2, iteration 3, iteration 4, iteration 5

// While loop
let count = 1;
while (count <= 5) {
    console.log("count " + count);
    count++;
} // Output: count 1, count 2, count 3, count 4, count 5

// Do-while loop
let num = 1;
do {
    console.log("num " + num);
    num++;
} while (num <= 5); // Output: num 1, num 2, num 3, num 4, num 5

// Break statement
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log("iteration " + i);
} // Output: iteration 1, iteration 2, iteration 3, iteration 4, iteration 5
// Continue statement
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log("iteration " + i);
} // Output: iteration 1, iteration 2, iteration 3, iteration 4, iteration 5, iteration 7, iteration 8, iteration 9, iteration 10