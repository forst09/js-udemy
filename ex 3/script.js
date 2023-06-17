'use strict';

//При помощи цикла выведите числа от 5 до 10 в консоль. 
//5 и 10 включительно.Цикл можно использовать любой
function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

//При помощи цикла for вывести числа от 20 до 10 в консоль.
//В обратном порядке(20, 19, 18...).Когда цикл дойдет до числа 13 - остановить весь цикл
function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i == 13) break;
        console.log(i);
    }
}

//При помощи цикла for выведите чётные числа от 2 до 10 включительно
function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

//Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же.
// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
function fourthTask() {
    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
            i++;
        }
    }
}

function fifthTask() {
    const arrayOfNumbers = [];
    let k = 0;
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[k] = i;
        k++;
    }
    return arrayOfNumbers;
}