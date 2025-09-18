// Object biasa
const siswa = {
    nama: "Budi",
    umur: 15,
    kelas: "10A"
};

// Object dengan new Object()
const guru = new Object();
guru.nama = "Ibu Ani";
guru.mapel = "Matematika";
guru.umur = 30;

// Akses Properti dengan Dot Notation
console.log(siswa.nama); // Output: Budi
console.log(guru.mapel); // Output: Matematika

// Akses Properti dengan Bracket Notation
console.log(siswa["umur"]); // Output: 15
console.log(guru["nama"]); // Output: Ibu Ani

// tambah properti baru
siswa.alamat = "Jakarta";
guru["alamat"] = "Bandung";
console.log(siswa); // Output: { nama: 'Budi', umur: 15, kelas: '10A', alamat: 'Jakarta' }
console.log(guru); // Output: { nama: 'Ibu Ani', mapel: 'Matematika', umur: 30, alamat: 'Bandung' }

// mengubah properti
siswa.kelas = "11B";
console.log(siswa); // Output: { nama: 'Budi', umur: 15, kelas: '11B', alamat: 'Jakarta' }

// menghapus properti
delete guru.umur;
console.log(guru); // Output: { nama: 'Ibu Ani', mapel: 'Matematika', alamat: 'Bandung' }

// Object di dalam object
const sekolah = {
    nama: "SMA 1",
    alamat: "Jl. Merdeka No.1",
    kepala_sekolah: {
        nama: "Bapak Joko",
        umur: 45
    }
};
console.log(sekolah.kepala_sekolah.nama); // Output: Bapak Joko

// Looping properti object
const buku = {
    judul: "JavaScript Dasar",
    penulis: "Andi",
    tahun: 2020
};
for (let key in buku) {
    console.log(key + ": " + buku[key]);
}
// Output:
// judul: JavaScript Dasar
// penulis: Andi
// tahun: 2020
