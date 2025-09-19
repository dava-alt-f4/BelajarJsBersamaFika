// async contoh sederhana
async function cobaAsync() {
    return 'Hello Async';
}

cobaAsync().then(result => console.log(result)); // Output: Hello Async

// async dengan await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cobaAsyncAwait() {
    await delay(1000);
    return 'Hello Async Await';
}

cobaAsyncAwait().then(result => console.log(result)); // Output: Hello Async Await

// async dengan try...catch
function login(user) {
    return new Promise((resolve, reject) => {
        if (user === 'admin') {
            resolve('Login successful');
        } else {
            reject('Login failed');
        }
    });
}

async function cobaLogin() {
    try {
        const result = await login('admin');
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

cobaLogin(); // Output: Login successful

// Promise.all dengan async/await
async function fetchData() {
    let [data1, data2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/2')
    ]);
    
    console.log(await data1.json());
    console.log(await data2.json());
}