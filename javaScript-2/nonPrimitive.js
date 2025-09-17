// Object
const Students = {
    name: "John",
    age: 21,
    height: 180.5,
};
console.log("Student name is " + Students.name);
console.log("Student age is " + Students.age);
console.log("Student height is " + Students.height);

// array
const colors = ["Red", "Green", "Blue"];
colors.forEach((color) => {
    console.log("Color: " + color);
});

// function
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet(Students.name));

// Data types
console.log(typeof "Hello");    // string
console.log(typeof 100);        // number
console.log(typeof true);       // boolean
console.log(typeof {});         // object
console.log(typeof []);         // object (array tetap dianggap object)
console.log(typeof null);       // object (ini bug lama di JavaScript)
console.log(typeof function(){}); // function