// Function tanpa default parameter
function greet(name) {
    if (name === undefined) {
        name = "Guest";
    }
    console.log(`Hello, ${name}!`);
}

// Function dengan default parameter
function greetWithDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
console.log(greetWithDefault()); // Output: Hello, Guest!
console.log(greetWithDefault("Alice")); // Output: Hello, Alice!

// Contoh lain
function hitungKeliling(luas = 1, panjang = 1) {
    return 2 * (panjang + luas);
}
console.log(hitungKeliling()); // Output: 4
console.log(hitungKeliling(2, 3)); // Output: 10

// default parameter dengan ekspresi
function buatArray(panjang = 5, nilaiAwal = 0) {
    let arr = [];
    for (let i = 0; i < panjang; i++) {
        arr[i] = nilaiAwal + i;
    }
    return arr;
}
console.log(buatArray()); // Output: [0, 1, 2, 3, 4]
console.log(buatArray(3, 10)); // Output: [10, 11, 12]

