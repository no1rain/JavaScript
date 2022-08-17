'use strict';

function doSomething() {
    console.log('hello~~');
}

doSomething();

const obj1 = {name: 'john', age: 30};
const obj2 = {book: 'Old man and the sea', company: 'youngjin'};

const obj = {...obj1, ...obj2};
console.log(obj);

const arr = [{...obj1, ...obj2}];
console.log(arr);