'use strict';

//Основная задача - это написать функцию isBudgetEnough,
//которая буде возвращать строку.Если бюджета хватает для отопления всего объема торгового центра -
// выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.
//Но эта задача содержит несколько подзадач внутри:
//- вычисление общей площади всех магазинов, которая вычисляется 
//как длина магазина, умноженная на его ширину;
//- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
//- определение того, хватает ли бюджета на оплату такого объема;
//- все числа идут без единиц измерения для упрощения, просто цифры и все;
//- функция должна продолжать работать, даже если изменяется количество магазинов, высота, 
//бюджет или подставляется вообще другой объект.

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let shopsSquare = 0;
    const shops = data.shops;
    for (let item in shops) {
        shopsSquare += shops[item].width * shops[item].length;
    }
    const mallVolume = shopsSquare * data.height;
    const heatingCost = mallVolume * data.moneyPer1m3;
    if (heatingCost <= data.budget) {
        return 'Бюджета достаточно';
    }
    else {
        return 'Бюджета недостаточно';
    }
}