'use strict';
/*
В каждой книге есть n страниц с номерами страниц от 1 до n. 
Написать функцию amountOfPages, аргумент которой summary 
составляется путем сложения количества цифр всех номеров страниц. 
Эта функция возвращает число - количество страниц n в книге.
*/

function amountOfPages(summary) {
    let arr = [];
    let length, lastNumber;
    let k = 0;
    for (let i = 1; i <= summary; i++) {
        length = i.toString().length;
        arr.push(i);
        k += length;
        if (k == summary) {
            lastNumber = arr.pop();
            break;
        }
    }
    return lastNumber;
}