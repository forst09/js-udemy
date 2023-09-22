'use strict';
/*
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. 
Если оно false - он переключает его в true, если true - переключает в false. 
Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function () {
        let filmName, filmEstimation;
        for (let i = 0; i < 2; i++) {
            filmName = prompt('один из последних просмотренных фильмов?').trim();
            filmEstimation = prompt('на сколько оцените его?').trim();
            if (filmName == '' || filmEstimation == '' || filmName === null
                || filmEstimation === null || filmName.length > 50) {
                i--;
            }
            else {
                personalMovieDB.movies[filmName] = filmEstimation;
            }
        }
    },
    detectPersonalLevel: function () {
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
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        let genres;
        for (let i = 0; i < 1; i++) {
            genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres == '' || genres == null) {
                i--;
            }
            else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        })
        // let genre;
        // for (let i = 0; i < 3; i++) {
        //     genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        //     if (genre == '' || genre == null) {
        //         i--;
        //     }
        //     else {
        //         personalMovieDB.genres[i] = genre;
        //     }
        // }
        // personalMovieDB.genres.forEach(function (item, i) {
        //     console.log(`Любимый жанр #${i + 1} - это ${item}`);
        // })
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        }
        else if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();

