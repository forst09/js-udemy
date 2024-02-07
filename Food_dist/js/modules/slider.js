function slider({ container, slide, nextArrow, prevArrow, totalCounter, wrapper, field }) {
    //slider
    const slider = document.querySelector(container);
    const slides = slider.querySelectorAll(slide);
    const sliderNav = slider.querySelector(totalCounter);
    const sliderNext = sliderNav.querySelector(nextArrow);
    const sliderPrev = sliderNav.querySelector(prevArrow);
    const slidesWrapper = slider.querySelector(wrapper);
    const slidesField = slider.querySelector(field);
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
}

export default slider;