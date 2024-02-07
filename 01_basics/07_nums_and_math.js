const score = 400 // automatically js defining type as number
console.log(score);

const balance = new Number(100) // Explicitly mentioning we need a number. used in banking application
console.log(balance); //[Number: 100] We can see number properties in the console tab.

//   Number.MAX_SAFE_INTEGER You will get all the Properties min/max value
/*
length is a property, not a method:
In JavaScript, parentheses are used to call functions or methods.
Properties, on the other hand, are values that are directly associated with objects. You access them using dot notation without parentheses.
*/
/*
console.log(balance.toString().length); // Once number become string we have additional properties like lenght.
console.log(balance.toFixed(2)); // To show decimal values upto how many numbers (specially in ecommerce application)

const otherNumber = 123.8957
console.log(otherNumber.toPrecision(3)); // 4 (round of )
console.log(otherNumber.toPrecision(2)); // will get in e.

const hundreds = 10000000
console.log(hundreds.toLocaleString()) // US system format by default 
console.log(hundreds.toLocaleString('en-IN'))
*/

// ++++++++++++ Maths ++++++++++++++++++++++++++

// Math library comes in Js  by default

// console.log(Math) // Object [Math] {}
// console.log(Math.abs(-4)) // -ve values turns out to be +ve
// console.log(Math.round(3.3))
// console.log(Math.ceil(3.3)) // ceil top value number
// console.log(Math.floor(3.3)) // floor lowest value
// console.log(Math.max(2, 3, 5, 1))
// console.log(Math.min(2, 3, 5, 1))


console.log(Math.random()) // always in b/w 0 to 1
console.log((Math.random()*10 )+ 1) // minimum value 1 to avoid zero case

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -  min + 1 ) + min));
 
