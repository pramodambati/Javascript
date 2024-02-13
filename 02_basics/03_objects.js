/* Objects are declared in two ways

Construtor -> singleton(It's an object) Object.Create
literals -> multiple Instances */

// Object Literals

const mySym = Symbol("key1")
console.log(mySym)
console.log(typeof mySym)

// declare the symbol has a key of the object and print it out.

const JsUser = {
    name: "Pramod", // By default "name" it is in string format.
    "full name": "Pramod Reddy Ambati", // We can only acces through Square notation using strings.
    [mySym]: "mykey1", // to use it as a symbol write down in Square brackets.
    age: 22,
    location: "Hyderabad",
    email: 'pramodambati1@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email); // Not better way
// console.log(JsUser["email"]); //Ours is investigative study we will print and check
// console.log(JsUser["full name"]);
// console.log(JsUser["age"])
// console.log(JsUser.mySym) // Undefined
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])


// JsUser.email='pramod@google.com'
// console.log(JsUser)

// Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// Object.freeze(JsUser)

JsUser.email='pramod@facebook.com'
// console.log(JsUser) // won't through you the error but the object is freezed.


JsUser.greeting = function(){
    console.log("hello Js User ")
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User , ${this.name} `)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo()) // Why extra undefined coming like in browser.