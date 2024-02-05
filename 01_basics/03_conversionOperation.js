let score = true

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

// Operations 
// ok
