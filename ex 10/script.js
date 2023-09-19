'use strict';

//Создайте метод showAgeAndLangs внутри объекта personalPlanPeter.
//При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
//Возраст и языки подставляются автоматически из объекта,
//а языки всегда в верхнем регистре(большими буквами).
//Если данные в объекте поменяются, то и сообщение тоже изменится.

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const { languages } = plan.skills;
        let langsString = languages.join(' ').toUpperCase();
        let responseString = `Мне ${plan.age} и я владею языками: ${langsString}`;
        return responseString;
    }
};

// Напишите функцию showExperience, которая будет принимать в себя
// объект со всеми данными и возвращать строку с опытом.
//P.S. желательно использовать деструктуризацию, но не обязательно

function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}

//Напишите функцию showProgrammingLangs, которая будет принимать в себя
//объект со всеми данными и возвращать строку в нужном виде.
//Пример: showProgrammingLangs(personalPlanPeter)  =>
//"Язык js изучен на 20% Язык php изучен на 10%"
//Причем функция должна работать вне зависимости от количества языков. 
//Если ни один не указан, то возвращается пустая строка.

function showProgrammingLangs(plan) {
    const { programmingLangs } = plan.skills;
    let langsString = '';

    for (let key in programmingLangs) {
        langsString += `Язык ${key} изучен на ${programmingLangs[key]}` + '\n';
    }

    return langsString;
}
