// Function
// - fundamental building block in the program
// - subprogram can be sued multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello');


// 2. Parameters
// premitive parameters: passed by value
// object parameters: pass by reference
function changeName(obj) {
    obj.name = 'color';
}
const john = { name: 'john' };
changeName(john);
console.log(john);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}
showMessage('Hi!');


// 4. Rest parameters (added in ES6)
function printAll(...args) {
    // a) case 1
    for( let i=0; i<args.length; i++) {
        console.log(args[i]);
    }

    // b) case 2
    for(const arg of args) {
        console.log(arg);
    }

    // c) case 3
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'john');


// 5. Local scope
let globalMessage = 'global';   // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();


// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);   // 3
console.log(`sum: ${sum(1,2)}`);


// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// first-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function
//
// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() {  // anonymous function(이름없는 함수)
    console.log('print');
};
print();    // () called function
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo  = function print() {
    console.log('no!');
};

randomQuiz('Wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous function
const simplePrint = function () {
    console.log('simplePrint!');
};

// Error 확인
const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
// two lines more && return
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();


// Fun quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
            break;
        case 'substract':
            return a - b;
            break;
        case 'divide':
            return a / b;
            break;
        case 'multiply':
            return a * b;
            break;
        case 'remainder':
            return a % b;
            break;
        default:
            throw Error('unknown command!');
    }
}

console.log(calculate('substract', 2, 9));

