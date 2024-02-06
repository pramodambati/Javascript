/*let score = true

// let {score} = req.body // this for backend

console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //even though its not a number but in JS it's get converted to number
console.log(valueInNumber); //NaN NotANumber // but if you check the actual value it is NaN


// There are no strict checks that's why ppl prefer typeScript

// what if the score has null 0
// what if the score has undefined or string it gives as output NaN
// what if the score has boolean (true/fales) => (1/0)

// This is by hitesh below ones learn to summarize like this
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIN = ' '

let booleanIsLoggedIn = Boolean(isLoggedIN)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33.4

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
*/
// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Pramod"

let str3 = str1 + str2
console.log(str3);
/*
console.log("1" + 2);
console.log(1 + "2"); // how this is so smart ??
console.log('1' + "2");
console.log('1' + "2" + 2);
console.log('1' + 2 + 2);  // it won't be 14 it's 122
console.log(1 + 2 + "2"); // here it is 32

console.log( 3 + 4 * 5 % 3) // its not practically okay while merging. messy code.
*/
// code should be readable 

console.log(true) // true
console.log(+true) // 1 boolean won't be increased so just outputs 1
console.log(+"") // 0
console.log(false) // false

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2

console.log(num1, num2, num3);


let gameCounter = 100
gameCounter++ // PostFix
++gameCounter // Prefix


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion