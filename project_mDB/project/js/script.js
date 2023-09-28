'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1) Удалить все рекламные блоки со страницы (правая часть сайта)
document.querySelector('.promo__adv').remove();

//2) Изменить жанр фильма, поменять "комедия" на "драма"
document.querySelector('.promo__genre').textContent = 'драма';

//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS 
document.querySelector('.promo__bg').style.background = 'url("img/bg.jpg") center center/cover no-repeat';

//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 
//5) Добавить нумерацию выведенных фильмов
const films = document.querySelector('.promo__interactive-list');
movieDB.movies.sort();
films.innerHTML = '';
movieDB.movies.forEach(function (item, i) {
    films.insertAdjacentHTML('beforeend',
        `<li class="promo__interactive-item">${i + 1}. ${item}
            <div class="delete"></div>
        </li>`);
});

