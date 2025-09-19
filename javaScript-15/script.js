// Kondisi tanpa ternary operator
let age = 18;
let status;
if (age >= 18) {
  status = "Dewasa";
} else {
  status = "Anak-anak";
}
console.log(status); // Output: Dewasa

// Kondisi dengan ternary operator
let age2 = 16;
let status2 = age2 >= 18 ? "Dewasa" : "Anak-anak";
console.log(status2); // Output: Anak-anak

// Contoh lain
let nilai = 75;
let grade = nilai >= 75 ? "Lulus" : "Tidak Lulus";
console.log(grade); // Output: Lulus

// Nested ternary operator
let tinggi = 170;
let kategori = tinggi >= 180 ? "Tinggi" :
               tinggi >= 160 ? "Sedang" :
               tinggi >= 140 ? "Pendek" : "kurcaci";
console.log(kategori); // Output: Sedang


