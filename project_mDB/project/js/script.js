'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    document.querySelector('.promo__adv').remove();

    document.querySelector('.promo__genre').textContent = 'драма';

    document.querySelector('.promo__bg').style.background = 'url("img/bg.jpg") center center/cover no-repeat';

    movieDB.movies.forEach((item, i) => {
        movieDB.movies[i] = item.toUpperCase();
    });

    const films = document.querySelector('.promo__interactive-list');
    function addFilms() {
        //5) Фильмы должны быть отсортированы по алфавиту
        movieDB.movies.sort();
        films.innerHTML = '';
        movieDB.movies.forEach(function (item, i) {
            films.insertAdjacentHTML('beforeend',
                `<li class="promo__interactive-item">${i + 1}. ${item.toUpperCase()}
                <div class="delete"></div>
            </li>`);
        });
        btnDelete();
    }

    addFilms();

    /*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий. 
    
    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    
    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"*/

    const inputAdd = document.querySelector('.adding__input');
    const btnAdd = document.querySelector('.add button');
    const checkbox = document.querySelector('input[type = "checkbox"]');
    btnAdd.addEventListener('click', function (e) {
        e.preventDefault();
        let inputAddValue = inputAdd.value;
        if (inputAddValue != '') {
            if (inputAddValue.length > 21) {
                inputAddValue = inputAddValue.split('');
                inputAddValue.splice(21, inputAddValue.length);
                inputAddValue = inputAddValue.join('') + '...';
            }
            movieDB.movies.push(inputAddValue.toUpperCase());
            inputAdd.value = '';
            console.log(movieDB);
            addFilms();
            if (checkbox.checked) {
                console.log('Добавляем любимый фильм');
            }
        }
    });


    //3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
    function btnDelete() {
        const btnsDelete = document.querySelectorAll('.delete');
        btnsDelete.forEach(btn => {
            btn.addEventListener('click', function () {
                console.log('hehe');
                const btnParent = btn.parentElement;
                const btnParentText = btnParent.textContent;
                const btnParentIndex = +btnParentText[0];
                movieDB.movies.splice(btnParentIndex - 1, 1);
                console.log(movieDB);
                addFilms();
            })
        })
    };
});