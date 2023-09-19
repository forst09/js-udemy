'use strict';

//Напишите функцию showFamily, которая будет принимать в себя массив строк
//и возвращать сообщение в нужном формате.
//Имена подставляются автоматически из массива.
//Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let message = '';
    if (arr.length === 0) {
        message = 'Семья пуста';
    }
    else {
        const familyString = family.join(' ');
        message = `Семья состоит из: ${familyString}`;
    }
    return message;
}

//напишите функцию standardizeStrings, которая будет принимать в себя массив строк 
//и будет выводить в консоль эти строки в нижнем регистре.
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    const arrToLowerCase = arr.join('\n').toLowerCase();
    console.log(arrToLowerCase);
}