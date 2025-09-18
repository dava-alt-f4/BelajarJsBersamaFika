// Function biasa
function halo() {
    console.log("Halo Dunia"); // Output: Halo Dunia
}

// Function arrow
const haloArrow = () => {
    console.log("Halo Dunia"); // Output: Halo Dunia
}

// Function arrow dengan parameter
const haloNama = (nama) => {
    console.log("Halo " + nama + ", Selamat datang!"); 
}
haloNama("Andi"); // Output: Halo Andi, Selamat datang!

// Function arrow satu parameter tanpa tanda kurung
const haloNamaSatuParam = nama => {
    console.log("Halo " + nama + ", Selamat datang!");
}
haloNamaSatuParam("Budi"); // Output: Halo Budi, Selamat datang!

// Function arrow dengan return satu baris
const tambah = (a, b) => a + b;
console.log(tambah(5, 3)); // Output: 8

// Function arrow dengan return objek
const buatObjek = (nama, umur) => ({ nama: nama, umur: umur });
console.log(buatObjek("Citra", 25)); // Output: { nama: 'Citra', umur: 25 }