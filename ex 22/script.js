'use strict';
/*
Допустим, у вас есть отдельные функции, которые в итоге вычисляют скидку:
*/

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const compose = (...args) => (price) => {
    let result;
    args.reverse().forEach(item => {
        if (result) {
            item(result);
            result = item(result);
        }
        else {
            result = item(price);
        }
    });
    return result;
}

const discount = compose(normalizePrice, divide100, multiply20);

discount(150.0);

const add1 = function (a) { return a + 1 }
const addAll3 = function (a, b, c) { return a + b + c }

const composeWithArgs = (...args) => (...params) => {
    let result;

    args.forEach(item => {
        if (result) {
            params[0] = result;
            result = item(...params);
        }
        else {
            result = item(...params)
        }
    })
    return result;
}

composeWithArgs(add1, addAll3)(1, 2, 3)