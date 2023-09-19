'use strict';

//Напишите функцию reverse, которая принимает в себя строку и
//возвращает эту строку в обратном порядке.
//Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) == 'string') {
        const reverseString = str.split('').reverse().join('');
        return reverseString;
    }
    else {
        return 'Ошибка!'
    }
}

//У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах.
//Один банк основной с базовыми валютами, второй дополнительный с прочими валютами
//Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента:
//первый - это массив со всеми доступными валютами из двух банков сразу
//(сейчас представим, что они не могут повторяться), второй - необязательный аргумент,
//который указывает ту валюту, которая сейчас закончилась в банкомате.
//Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'.
//Функция возвращает строку в нужном виде.

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    let currString = '';
    for (let key in arr) {
        currString += arr[key] + '\n';
    }
    let newCurrString = '';
    let response = '';

    if (arr.length === 0) {
        response = 'Нет доступных валют';
        return response;
    }

    if (currString.includes(missingCurr) === true) {
        newCurrString = currString.replace(`${missingCurr}\n`, '');
        response = `Доступные валюты:\n${newCurrString}`;
        return response;
    }
    else {
        response = `Доступные валюты:\n${currString}`;
        return response;
    }
}