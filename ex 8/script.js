'use strict';

// Создайте функцию, которая принимает в себя целое число минут
// и возвращает время в нужном формате строки. Обратите внимание на окончание слова "час"
// - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число,
// дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

function getTimeFromMinutes(minutes) {
    if (Number.isInteger(minutes) && minutes >= 0) {
        let hours = parseInt(minutes / 60);
        let restMinutes = minutes % 60;
        let hoursString, restMinutesString;

        if (hours % 10 === 1) {
            hoursString = `${hours} час`;
        }
        else if ([2, 3, 4].includes(hours % 10)) {
            hoursString = `${hours} часа`;
        }
        else if ([5, 6, 7, 8, 9, 0].includes(hours % 10) || (hours > 10 && hours < 20)) {
            hoursString = `${hours} часов`;
        }

        if (restMinutes % 10 === 1) {
            restMinutesString = `${restMinutes} минута`;
        }
        else if ([2, 3, 4].includes(restMinutes % 10)) {
            restMinutesString = `${restMinutes} минуты`;
        }
        else if ([5, 6, 7, 8, 9, 0].includes(restMinutes % 10) || (restMinutes > 10 && restMinutes < 20)) {
            restMinutesString = `${restMinutes} минут`;
        }

        return `Это ${hoursString} и ${restMinutesString}`;
    }
    else return 'Ошибка, проверьте данные';
}

getTimeFromMinutes(152);


//Напишите функцию, которая принимает в себя 4 числа
// и возвращает самое большее из них. Если один из аргументов не является числом
//или их меньше 4 - возвращается 0. Дробные числа разрешены.
function findMaxNumber(number1, number2, number3, number4) {
    if (number1 && number2 && number3 && number4) {
        let array = [number1, number2, number3, number4];
        for (let i = 0; i < array.length; i++) {
            if (typeof (array[i]) != 'number') {
                return 0;
            }
        }
        return Math.max(...array);
    }
    else return 0;
}
findMaxNumber(5, 2, 100.5, -4);

