'use strict';
/*
Создайте функцию deepCount с помощью рекурсии, 
которая будет считать количество всех элементов в массиве, 
включая и вложенные массивы. 
Учтите, что сам вложенный массив тоже входит в счет.
*/

function deepCount(a) {
    let n = 0;
    function deepCountRecursion(array) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i]) === false) {
                n++;
            }
            else {
                n++;
                let arr = array[i];
                for (let j = 0; j < arr.length; j++) {
                    n++;
                    if (Array.isArray(arr[j])) {
                        deepCountRecursion(arr[j]);
                    }
                }
            }
        }
    }
    deepCountRecursion(a);
    return n;
}

const hehe = deepCount([[[[[[[[[]]]]]]]]]);
console.log(hehe);