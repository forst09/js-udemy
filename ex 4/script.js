'use strict';

//Заполните новый массив (result) числами из старого (arr).
//Количество элементов в массиве можно получить как arr.length,
//а к элементам обращаемся все так же: arr[0], arr[1] и тд.

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    // Не трогаем
    return result;
}

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
//а если попадается строка строка - то к ней было добавлено " - done".
//Для определения типа данных используйте typeof();
//Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof (data[i]) == 'number') {
            data[i] = data[i] * 2;
        }
        else if (typeof (data[i]) == 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    // Не трогаем
    return data;
}

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
//Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    let k = data.length - 1;
    for (let i = 0; i < data.length; i++) {
        result[i] = data[k];
        k--;
    }

    // Не трогаем
    return result;
}
