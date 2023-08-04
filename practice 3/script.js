'use strict';
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let filmName, filmEstimation;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?');
    }
}

// start();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        filmName = prompt('один из последних просмотренных фильмов?');
        filmEstimation = prompt('на сколько оцените его?');
        if (filmName == '' || filmEstimation == '' || filmName === null
            || filmEstimation === null || filmName.length > 50) {
            i--;
        }
        else {
            personalMovieDB.movies[filmName] = filmEstimation;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    }
    else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    }
    else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    let genre;
    for (let i = 0; i < 3; i++) {
        genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        personalMovieDB.genres[i] = genre;
    }

}

writeYourGenres();
console.log(personalMovieDB);