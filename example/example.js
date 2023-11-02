'use strict';

// console.log('запрос данных...');

// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('подготовка данных');

//         const product = {
//             name: 'tv',
//             price: 2000,
//         };

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = 'true';
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('произошла ошибка');
// }).finally(() => {
//     console.log('finnaly');
// })

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    })
};

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('race');
});


