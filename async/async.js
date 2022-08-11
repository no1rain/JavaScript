'use strict';

// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
    // do network request in 10 sec....
    return 'ellie';
}
// function fetchUser() {
//     // do network request in 10 sec....
//     return 'ellie';
// }

// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         // do network request in 10 sec....
//         resolve('ellie');
//     });
// }

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return 'Apple';
}

async function getBanana() {
    await delay(1000);
    return 'Banana';
}

async function pickFruits() {
    // 병렬 처리
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;

    // 순차 처리
    // const apple = await getApple();
    // const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);