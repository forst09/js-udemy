'use strict';

const person = {
    name: 'alex',
    tel: '+74444444',
    parents: {
        mom: 'olga',
        dad: 'mike'
    }
};
const clone = JSON.parse(JSON.stringify(person));