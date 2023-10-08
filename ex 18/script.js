'use strict';
/*
Панграмма — это предложение, в котором каждая буква алфавита 
встречается хотя бы по одному разу по возможности без повторений.
Напишите функцию isPangram, которая принимает в себя строку 
и возвращает логическое значение. 
Если строка является панграммой - вернется true, если нет - false.
*/

function isPangram(string) {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    let k = 0;
    alphabet.forEach(letter => {
        if (string.toLowerCase().includes(letter)) {
            k++;
        }
    })
    return k == alphabet.length ? true : false;
}