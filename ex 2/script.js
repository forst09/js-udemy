'use strict';

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let filmName, filmEstimation;
for (let i = 0; i < 2; i++) {
    filmName = prompt('один из последних просмотренных фильмов?');
    filmEstimation = prompt('на сколько оцените его?');
    personalMovieDB.movies[filmName] = filmEstimation;
}
console.log(personalMovieDB);