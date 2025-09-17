// Function
function greet() {
    console.log("Hello, Guest");
}
greet(); // Hello, Guest

// Function with parameter
function greetUser(name) {
    console.log("Hello, " + name);
}
greetUser("Alice"); // Hello, Alice

// Function with return value
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // 8

// Expression function
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 6)); // 24