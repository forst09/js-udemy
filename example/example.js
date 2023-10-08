'use strict';

// const bigint = 1235456151654894156187484548625648n;

const sameBigint = BigInt(1235456151654894156187484548625648);

// console.log(2n > 5);

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(+bigint + number);