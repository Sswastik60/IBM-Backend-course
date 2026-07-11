// const http = require('http');

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 1 resolved');
//     }, 6000);   
// });

// function promise2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Promise 2 resolved');
//         }, 3000);
//     });
// }

// promise1.then((result) => {
//     console.log(result);
//     return promise2();
// }).then((result) => {
//     console.log(result);
// });

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 6000);   
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 3000);           
});

promise1.then((result) => {
    console.log(result);

});
promise2.then((result) => {
    console.log(result);
});

