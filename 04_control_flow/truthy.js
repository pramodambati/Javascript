// const userEmail = "pramod@ai.com" // Got User Email
// const userEmail = "" // Don't have user email
const userEmail = [] // Got User Email
// const userEmail = {} // Got User Email

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Don't have user email");
}


// falsy Values

// false, 0, -0, BigInt 0n, "" , null, undefined, NaN

// truthy values

// "0", "false", " ", [], {} , function(){} (empty function)

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObject = {}

// How to know if an object is empty or not 

// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");
// }

// console.log(false == 0);
// console.log(false == "");
// console.log(0 == "");


// Nullish Coalescing Operator (??): null undefined

let val1;
console.log(val1);
val1 = 5 ?? 10 
let val2 = null ?? 10

let val3 = undefined ?? 15
let val4 = null ?? 10 ?? 20

// console.log(val1);
// console.log(val2);
// console.log(val3);
console.log(val4);

// Terniary Operator

// condition ? true : false

const iceTeaPirce = 100

iceTeaPirce <= 80 ? console.log("less than 80") : console.log("more than 80");


