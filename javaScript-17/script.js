// Promise contoh
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulasi keberhasilan
    if (success) {
        resolve("Operasi berhasil!");
    } else {
        reject("Operasi gagal.");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });


// Contoh kasus sederhana
function cekLogin(user) {
  return new Promise((resolve, reject) => {
    if (user === "admin") {
      resolve("Login berhasil!");
    } else {
      reject("Login gagal!");
    }
  });
}

cekLogin("admin")
  .then((res) => console.log(res))    // Output: Login berhasil!
  .catch((err) => console.log(err));

// Promise dengan setTimeout
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Delay selama ${ms} ms selesai.`);
    }, ms);
  });
}

delay(2000)
  .then((res) => console.log(res));  // Output: Delay selama 2000 ms selesai.
