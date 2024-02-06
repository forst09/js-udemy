'use strict';

window.addEventListener('DOMContentLoaded', () => {
    //tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });

    //timer
    const deadline = '2023-01-01';
    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0
        }
        else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (100 * 60 * 60)) % 24),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) { return `0${num}` }
        else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    //modal
    const modalBtn = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerID);
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalBtn.forEach(item => {
        item.addEventListener('click', openModal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // const modalTimerID = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    // window.addEventListener('scroll', showModalByScroll);

    //cards
    const cardsContainer = document.querySelector('.menu__field .container');
    if (cardsContainer) {
        class Card {
            constructor(imgSrc, imgAlt, subtitle, descr, cost, ...classes) {
                this.imgSrc = imgSrc;
                this.imgAlt = imgAlt;
                this.subtitle = subtitle;
                this.descr = descr;
                this.cost = cost;
                this.classes = classes;
                this.transfer = 27;
                this.changeToUAH();
            }
            changeToUAH() {
                this.cost = this.cost * this.transfer;
            };

            insertCard() {
                let cardHTML = document.createElement('div');
                if (this.classes.length === 0) {
                    this.classes = 'menu__item';
                    cardHTML.classList.add(this.classes);
                }
                else {
                    this.classes.forEach(className => cardHTML.classList.add(className));
                }

                cardHTML.innerHTML = `
                         <img src="${this.imgSrc}" alt="${this.imgAlt}">
                         <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                         <div class="menu__item-descr">${this.descr}</div>
                         <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                             <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.cost}</span> грн/день</div>
                         </div>`;
                cardsContainer.append(cardHTML);
            };
        };

        const getResource = async (url) => {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error(`could not fetch ${url}, status: ${res.status}`);
            }

            return await res.json();
        };

        getResource('http://localhost:3000/menu')
            .then(data => {
                data.forEach(({ img, altimg, title, descr, price }) => {
                    new Card(img, altimg, title, descr, price).insertCard();
                })
            });

        // axios.get('http://localhost:3000/menu')
        //     .then(data => {
        //         data.data.forEach(({ img, altimg, title, descr, price }) => {
        //             new Card(img, altimg, title, descr, price).insertCard();
        //         })
        //     });

        // getResource('http://localhost:3000/menu')
        //     .then(data => createCard(data));

        // function createCard(data) {
        //     data.forEach(({ img, altimg, title, descr, price }) => {
        //         const element = document.createElement('div');
        //         element.classList.add('menu__item');
        //         element.innerHTML = `
        //         <img src="${img}" alt="${altimg}">
        //         <h3 class="menu__item-subtitle">${title}</h3>
        //         <div class="menu__item-descr">${descr}</div>
        //         <div class="menu__item-divider"></div>
        //         <div class="menu__item-price">
        //             <div class="menu__item-cost">Цена:</div>
        //            <div class="menu__item-total"><span>${price}</span> грн/день</div>
        //         </div>
        //         `;

        //         cardsContainer.append(element);
        //     })
        // }
    };

    //forms
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'спасибо! скоро мы с вами свяжемся',
        failure: 'что-то пошло не так...'
    }

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    }

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                })
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000)
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())

    //slider
    const slider = document.querySelector('.offer__slider');
    const slides = slider.querySelectorAll('.offer__slide');
    const sliderNav = slider.querySelector('.offer__slider-counter');
    const sliderNext = sliderNav.querySelector('.offer__slider-next');
    const sliderPrev = sliderNav.querySelector('.offer__slider-prev');
    const slidesWrapper = slider.querySelector('.offer__slider-wrapper');
    const slidesField = slider.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width;
    let sliderIndex = 1;
    let offset = 0;

    //make dot active
    function findSlide(slideIndex) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => {
            dot.style.opacity = '0.5';
        })
        document.querySelector(`.dot[slideindex="${slideIndex}"]`).style.opacity = '1';
    }

    //write current index
    function insertIndex() {
        if (sliderIndex < 10) {
            sliderNav.querySelector('#current').textContent = `0${sliderIndex}`;
        }
        else {
            sliderNav.querySelector('#current').textContent = sliderIndex;
        }
    }

    //pagination
    const paginationWrapper = document.createElement('div');
    paginationWrapper.classList.add('carousel-indicators');
    paginationWrapper.style.cssText = `
                                    position: absolute;
                                    right: 0;
                                    bottom: 0;
                                    left: 0;
                                    z-index: 15;
                                    display: flex;
                                    justify-content: center;
                                    margin-right: 15%;
                                    margin-left: 15%;
                                    list-style: none;
                                `;
    for (let i = 0; i < slides.length; i++) {
        let paginationDot = document.createElement('button');
        paginationDot.classList.add('dot')
        paginationDot.style.cssText = `
                                    box-sizing: content-box;
                                    flex: 0 1 auto;
                                    width: 30px;
                                    height: 6px;
                                    margin-right: 3px;
                                    margin-left: 3px;
                                    cursor: pointer;
                                    background-color: #fff;
                                    background-clip: padding-box;
                                    border-top: 10px solid transparent;
                                    border-bottom: 10px solid transparent;
                                    border-right: unset;
                                    border-left: unset;
                                    opacity: .5;
                                    transition: opacity .6s ease;
                                `;
        paginationDot.setAttribute('slideIndex', i + 1);
        paginationDot.addEventListener('click', () => {
            let index = paginationDot.getAttribute('slideIndex'),
                differenceIndex;

            if (sliderIndex < index) {
                differenceIndex = index - sliderIndex;
                offset += +width.replace(/\D/g, '') * differenceIndex;
                slidesField.style.transform = `translateX(-${offset}px)`;
            }

            else if (sliderIndex > index) {
                differenceIndex = sliderIndex - index;
                offset -= +width.replace(/\D/g, '') * differenceIndex;
                slidesField.style.transform = `translateX(-${offset}px)`;
            }

            sliderIndex = index;
            insertIndex();

            findSlide(sliderIndex);
        })
        paginationWrapper.append(paginationDot);
    }
    slider.append(paginationWrapper);

    insertIndex();
    findSlide(sliderIndex);

    if (slides.length < 10) {
        sliderNav.querySelector('#total').textContent = `0${slides.length}`;
    }
    else {
        sliderNav.querySelector('#total').textContent = slides.length;
    }

    slides.forEach((slide, i) => {
        slide.setAttribute('index', i + 1);
    });

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    sliderNext.addEventListener('click', () => {
        if (sliderIndex >= slides.length) {
            sliderIndex = 1;
        }
        else {
            sliderIndex++;
        }
        insertIndex();

        if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
            offset = 0;
        }
        else {
            offset += +width.replace(/\D/g, '');
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        findSlide(sliderIndex);
    });

    sliderPrev.addEventListener('click', () => {
        sliderIndex--;
        if (sliderIndex < 1) {
            sliderIndex = slides.length;
        }
        insertIndex();

        if (offset === 0) {
            offset = +width.replace(/\D/g, '') * (slides.length - 1);
        }
        else {
            offset -= +width.replace(/\D/g, '');
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        findSlide(sliderIndex);
    })

    //calculator
    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    }
    else {
        sex = 'female';
        localStorage.setItem('sex', sex);
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    }
    else {
        ratio = 1.375;
        localStorage.setItem('ratio', ratio);
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(item => {
            item.classList.remove(activeClass);
            if (item.getAttribute('id') === localStorage.getItem('sex')) {
                item.classList.add(activeClass);
            }

            if (item.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                item.classList.add(activeClass);
            }
        })
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (sex && height && weight && age && ratio) {
            if (sex === 'female') {
                result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
            }
            else {
                result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
            }
        }
        else {
            result.textContent = '____';
            return;
        }
    }

    calcTotal();

    function getStaticInfo(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', ratio);
                }
                else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', sex);
                }

                console.log(ratio, sex);

                elements.forEach(item => {
                    item.classList.remove(activeClass);
                    e.target.classList.add(activeClass);
                })
                calcTotal();
            })
        })
    }

    getStaticInfo('#gender div', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInfo(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            }
            else {
                input.style.border = '';
            }
            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }

            calcTotal();

        })
    };

    getDynamicInfo('#height');
    getDynamicInfo('#weight');
    getDynamicInfo('#age');

});


















