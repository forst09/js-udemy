'use strict';
/*
У вас есть список фильмов с рейтингом в виде массива объектов. 
Напишите функцию showGoodFilms, которая будет принимать этот массив, 
а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
*/

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    const goodFilms = arr.filter(film => {
        if (film.rating >= 8) {
            return film;
        }
    });
    return goodFilms;
}

// console.log(showGoodFilms(films));

/*Напишите функцию showListOfFilms, которая будет принимать этот же массив, 
а возвращать будет строку, которая содержит названия фильмов через запятую. */
function showListOfFilms(arr) {
    const listOfFilms = arr.reduce((result, film) => {
        if (typeof (result) === 'object') result = result.name;
        return `${result}, ${film.name}`;
    });
    return listOfFilms;
}

// console.log(showListOfFilms(films));

/*Напишите функцию setFilmsIds, которая будет принимать этот же массив, 
а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. 
Значение этого поля установите по нумерации фильма. */

function setFilmsIds(arr) {
    arr.map((item, i) => {
        item.id = i;
    });

    return arr;
}

// console.log(setFilmsIds(films));

/*Запишите результат предыдущей функции в переменную tranformedArray. 
Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. 
Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray)*/

const tranformedArray = setFilmsIds(films);
// console.log(tranformedArray);

// console.log(tranformedArray);

function checkFilms(arr) {
    return arr.every(item => 'id' in item);
}

console.log(checkFilms(tranformedArray));
// checkFilms(tranformedArray);