const score = 400
console.log(score);

const balance = new Number(100) // Explicitly mentioning we need a number.
console.log(balance);

/*
length is a property, not a method:
In JavaScript, parentheses are used to call functions or methods.
Properties, on the other hand, are values that are directly associated with objects. You access them using dot notation without parentheses.
*/
/*
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // To show decimal values upto how many numbers

const otherNumber = 1123.8957
console.log(otherNumber.toPrecision(10));

const hundreds = 10000000
console.log(hundreds.toLocaleString()) // US system format
console.log(hundreds.toLocaleString('en-IN'))
*/

// ++++++++++++ Maths ++++++++++++++++++++++++++

// Math library comes in Js  by default

console.log(Math)

console.log(Math.abs(-4));
console.log(Math.round(-4.7));
console.log(Math.round(-4.3));
console.log(Math.round(4.7));
console.log(Math.ceil(4.7));
console.log(Math.ceil(-4.7));
console.log(Math.ceil(-4.3));
console.log(Math.floor(-4.3));
console.log(Math.floor(4.9));