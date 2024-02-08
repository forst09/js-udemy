'use strict';
/*
Допустим, у вас есть отдельные функции, которые в итоге вычисляют скидку:
*/

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

// const compose = (price, hehe, nothehe, he) => function (hihi, nothihi) {
//     console.log(arguments);
//     console.log(price, hehe, nothehe, he);
//     console.log(typeof (price));
//     console.log(hihi, nothihi);
// }

const compose = (...args) => (price) => {
    args.reverse().forEach((item, i) => {
        console.log(item(price));
    })
}

const discount = compose(normalizePrice, divide100, multiply20);

discount(200.0);

// console.log(discount);