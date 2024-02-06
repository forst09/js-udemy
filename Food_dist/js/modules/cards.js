function cards() {
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
}

module.exports = cards;