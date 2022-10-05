'use strict'

/**
 * test
 */
const a = {
    string: 'string',
    number: 123,
    bool: false,
    nul: null,
    date: new Date(),  // stringified
    undef: undefined,  // lost
    inf: Infinity,  // forced to 'null'
    re: /.*/,  // lost
}
a.string = 'Number';
console.log(a);
console.log(`a typeof : ${typeof a}`);

/**
 * spread
 */
const obj = {...a};
Object.freeze(obj)
// obj.string = 'Number';
console.log(obj);
console.log(`obj typeof : ${typeof obj}`);
console.log(Object.isFrozen(obj));
console.log(a===obj);
