// array biasa
let buah = ['apel', 'jeruk', 'pisang'];
console.log(buah); // Output: ['apel', 'jeruk', 'pisang']

// array dengan constructor
let sayur = new Array('bayam', 'kangkung', 'wortel');
console.log(sayur); // Output: ['bayam', 'kangkung', 'wortel']

// Akses elemen array
console.log(buah[0]); // Output: 'apel'
console.log(sayur[1]); // Output: 'kangkung'

// Ubah elemen array
let mobil = ['Toyota', 'Honda', 'Ford'];
mobil[1] = 'BMW';
console.log(mobil); // Output: ['Toyota', 'BMW', 'Ford']

// Length array
let angka = [1, 2, 3, 4, 5];
console.log(angka.length); // Output: 5

// push method pada array
let hewan = ['kucing', 'anjing'];
hewan.push('kelinci');
console.log(hewan); // Output: ['kucing', 'anjing', 'kelinci']

// pop method pada array
let warna = ['merah', 'biru', 'hijau'];
warna.pop();
console.log(warna); // Output: ['merah', 'biru']

// shift method pada array
let alat = ['komputer', 'laptop', 'tablet'];
alat.shift();
console.log(alat); // Output: ['laptop', 'tablet']

// unshift method pada array
let negara = ['Indonesia', 'Malaysia'];
negara.unshift('Singapura');
console.log(negara); // Output: ['Singapura', 'Indonesia', 'Malaysia']

// forEach method pada array
let angkaGenap = [2, 4, 6, 8];
angkaGenap.forEach(function(angka) {
  console.log(angka);
});

// map method pada array
let angkaGanjil = [1, 3, 5, 7];
let angkaGanjilDikaliDua = angkaGanjil.map(function(angka) {
  return angka * 2;
});
console.log(angkaGanjilDikaliDua); // Output: [2, 6, 10, 14]

// filter method pada array
let angkaCampuran = [1, 2, 3, 4, 5, 6];
let Genap = angkaCampuran.filter(function(angka) {
  return angka % 2 === 0;
});
console.log(angkaGenap); // Output: [2, 4, 6]