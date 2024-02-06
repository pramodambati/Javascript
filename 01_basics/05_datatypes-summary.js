/* Primitive and non-primitive(Reference) datatypes
It is basde on call by value or call by refernce it is based on how data is kept in the memory and how data can be accessed
*/

// Primitive # call by value watch at 2.42 

// 7 types : String, Number, Boolean, null, undefined(variable and memory space declared but not sure what value comes ), symbol(to make any value unique), BigInt(Scientific values)

/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.


const score = 100
const score1 = false

const isLoggedIn = fales
const outsideTemp = null
let userEmail = undefined;
let userEmail;
*/
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id)
console.log(anotherId)
console.log(id === anotherId) // false

const bigNumber = 390497989598787n

// Reference Type (Non Primitive) reference is directly allocated

// Array, Objects, Functions
/*
const heros = ['doga', 'pramod', 'Batman']

let myObj = {
    name: 'pramu',
    age: 22,
}

const myFunction = function () {
    console.log('Hello World')
}

console.log(heros)
console.log(myObj)
myFunction() // Hello World
console.log(myFunction) //[Function: myFunction]
console.log(typeof bigNumber)
console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction) // object function 
/*

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function  // we call it as object function
       Object  =>  object
       
       https://262.ecma-international.org/5.1/#sec-11.4.3
*/


//-------------------------------


// Stack(Primitive), Heap(Non-Primitive)

let firstName = 'Pramod'
let anotherName = firstName
anotherName = 'Pramu'

console.log(firstName)
console.log(anotherName)


let userOne = {

    email: "pramod@gmail.com",
    upiId: "9390095818"

}

let userTwo = userOne

userTwo.email = 'pramodambati1@gmail.com'
console.log(userOne.email)
console.log(userTwo.email)

// Primitive values goes into stack and whenever you take something inside the stack, you get only a copy of it.

// Where as in Heap you will get reference change you make or update , you do it in the original value only.