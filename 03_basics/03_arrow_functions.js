const user = {
    username: "pramod",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// console.log(user.welcomeMessage);

// user.welcomeMessage();
// user.username = "hitesh"
// user.welcomeMessage();
// console.log(this)

// function chai() {
//     let username = "pramod"
//     // console.log(this);
//     console.log(this.username); // this context is working under object itself, coming inside funciton i am not able to use.
// }

// chai()

// const chai = function () {
//     let username = "pramod"
//     console.log(this.username);
// }


const chai =  () => {
    let username = "pramod"
    console.log(this);
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // Explicit return
// }

// Using curly Braces you need to write  return keyword. 
// Using paranthesis  you no need to write  return keyword. 

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return
// const addTwo = (num1, num2) =>  (num1 + num2) // implicit return

const addTwo = (num1, num2) =>  ({username: "vicky"}) // implicit return
    

console.log(addTwo(3, 4));