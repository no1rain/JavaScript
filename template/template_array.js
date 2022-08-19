'use strict';

const arr = [1, 2, 3, 4, 5];

for(let val in arr) {
    console.log(`val: ${val}`);
}

const str = arr.join(",");

console.log(str);

const arr2 = str.split(",");

console.log(arr2);