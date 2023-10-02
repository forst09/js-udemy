'use strict';

// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

function pow(x, n) {
    if (n === 1) {
        return x;
    }
    else {
        return x * pow(x, n - 1);
    }
}

// const hehe = pow(2, 5);
// console.log(hehe);

let students = {
    js: [{
        name: 'john',
        progress: 100
    }, {
        name: 'ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'peter',
            progress: 20
        }, {
            name: 'ann',
            progress: 18
        }],

        pro: [{
            name: 'sam',
            progress: 10
        }],

        semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        }
        else {
            for (let subcourse of Object.values(course)) {
                students += subcourse.length;
                for (let i = 0; i < subcourse.length; i++) {
                    total += subcourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    }
    else {
        let total = [0, 0];
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);
