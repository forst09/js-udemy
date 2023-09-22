'use strict';

//У вас есть список учеников, которые хотят поиграть в игру. 
//Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, 
//которая принимает в себя массив строк. Внутри она сначала сортирует имена по алфавиту. 
//Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
//Эти группы должны быть массивами. Как итог, функция возвращает новый массив 
//с тремя командами и строкой как 4й элемент.

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra',
    'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    const arrSort = arr.sort();
    let restStudents = 'Оставшиеся студенты: ';
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arrSort.splice(0, 3));
    }
    if (arrSort.length > 0) {
        restStudents += arrSort.join(', ');
    }
    else {
        restStudents += '-';
    }

    newArr.push(restStudents);
    return newArr;
}