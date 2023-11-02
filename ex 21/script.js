'use strict';
/*
У вас есть небольшой массив с данными о доходах каждой торговой точки. 
Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных 
и возвращает сумму только положительных значений из каждого объекта. (число)
*/

const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 }
];

const getPositiveIncomeAmount = (data) => {
    const arrPositive = data.filter(item => item.amount > 0);
    const sum = arrPositive.reduce((sum, current) => sum + current.amount, 0);
    return sum;
};

// console.log(getPositiveIncomeAmount(funds));

/*Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. 
Если хотя бы один из объектов содержит отрицательное значение поля amount, 
то функция возвращает сумму всех значений (число).  
Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных. */

const getTotalIncomeAmount = (data) => {
    const dataNegative = data.every(item => item.amount > 0);
    if (dataNegative) {
        getPositiveIncomeAmount(data);
    }
    else {
        const value = data.reduce((sum, current) => sum + current.amount, 0);
        return value;
    }
};

getTotalIncomeAmount(funds);