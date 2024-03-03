// let , const, var  Keywords in JavaScript.

// Two types of Data types in Primitive and Reference.

// Primitive

// String, Number, Boolean, Null, Undefined, Bigint, Symbol.

const name = "pramod"
let age = 22
let loggedIn = true
let temperature = null
// const state;

/* The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.

Therefore, you must assign a value to a const variable at the time of declaration, and you cannot subsequently reassign it. If you try to declare a const variable without assigning a value to it, you'll get an error because it's mandatory to provide an initial value.
*/

let state; // Intialized with undefined value
const bigInteger = 12349804573987413n;
const sym = Symbol("test")
const sym2 = Symbol("test")

// console.log(name, typeof name);
// console.log(age, typeof age);
// console.log(loggedIn, typeof loggedIn);
// console.log(temperature, typeof temperature);
// console.log(state, typeof state);
// console.log(bigInteger, typeof bigInteger);
// console.log(sym, typeof sym);
// console.log(sym2, typeof sym2);

// if(sym == sym2) {
//     console.log("Both are same");
// } else{
//     console.log("Both are not Same");
// }

// Comparision Operator

const score = "33"

// console.log(score)
// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)

const a = Number("123")
const b = new Number("123") // Warning: You should rarely find yourself using Number as a constructor.
// console.log(typeof a);
// console.log(typeof b);

// console.log(new Number(42) !== 42);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);


// console.log(null);
// console.log(null > 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true
// console.log(null == 0); // false
// console.log(null != 0); // true

// null represents the intentional absence of any object value.
// It's not the same as 0, which is a numerical value.
// JavaScript's type coercion for comparisons can lead to unexpected results, as seen in null > 0 and null >= 0.
// Use strict equality (===) or inequality (!==) to avoid type coercion surprises and ensure more accurate comparisons.

// Strict Check === checks datatype not only its value

// console.log(2 == '2'); // true
// console.log(2 === '2'); // false


// Reference Datatypes

// Array, object, function

const newArray = [1, 2, 3, 4, 5]
console.log(newArray);
console.log(typeof newArray);

const user = {
    name: "Pramod Reddy Ambati",
    email: "pramodambati1@gmail.com"
    
}

console.log(user);
console.log(typeof user);

const test = function () {
    return "working"
}
console.log(test);
console.log(test());
console.log(typeof test);

/*
test: When you log test itself, you're actually logging the function definition, not executing it. So, it will display the definition of the function in the console.

[Function: test] is the function definition.
working is the result of invoking the test function.
function indicates that test is of type function. */