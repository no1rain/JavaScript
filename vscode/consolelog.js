'use strict';

console.clear();

const foo = { name: 'tom', age: 30, nervous: false };
const bar = { name: 'dick', age: 40, nervous: false };
const baz = { name: 'harry', age: 50, nervous: true };

'Bad Object Code 💩'

console.log(foo);
console.log(bar);
console.log(baz);

'Good Object Code ✅'

// Computed Property Names

console.log('%c My Friends', 'color: orange; font-weight: bold;');
console.log({ foo, bar, baz });

// Console.table(...)
console.table([ foo, bar, baz ]);