'use strict';

let pos = 0;
const box = document.querySelector('.box');
const btn = document.querySelector('button');

function animation() {
    pos++;
    box.style.top = pos + 'px';
    box.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(animation);
    }
}

btn.addEventListener('click', () => {
    requestAnimationFrame(animation);
});

let id = requestAnimationFrame(animation);
cancelAnimationFrame(id);

