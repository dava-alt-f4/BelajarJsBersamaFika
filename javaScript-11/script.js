// Rest parameter argumen function
function sum(...angka) {
    let total = 0;
    for (let nilai of angka) {
        total += nilai;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Posisi Rest parameter
function introduce(nama, ...hobi) {
    return `Nama saya ${nama}, dan hobi saya adalah ${hobi.join(', ')}.`;
}
console.log(introduce('Andi', 'membaca', 'bersepeda', 'memasak'));
// Output: Nama saya Andi, dan hobi saya adalah membaca, bersepeda, memasak.

// Rest parameter pada destrukturisasi array
const angka = [1, 2, 3, 4, 5];
const [a, b, ...sisaAngka] = angka;
console.log(a); // Output: 1

// Rest parameter pada destrukturisasi objek
const orang = {
    nama: 'Budi',
    umur: 25,
    pekerjaan: 'Programmer',
    kota: 'Jakarta'
};
const { nama, umur, ...infoLain } = orang;
console.log(nama); // Output: Budi