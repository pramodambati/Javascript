function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("M");
    console.log("O");
    console.log("D");
}


// sayMyName  // Reference
// sayMyName()  // Execution

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers(2, 3)
// addTwoNumbers("2", 3)
// addTwoNumbers(2, "a")
// addTwoNumbers(2, null)

// Function definition i/p known as parameters.
// When you call the function value you pass inside it is called arguments.

// const result = addTwoNumbers(3, 5)
// console.log("Result :"  ,result);


function addTwoNumbers2(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
    // console.log("pramod");  // After result noting gets executed.
}

const result2 = addTwoNumbers2(4, 5)
// console.log("Result :"  ,result2);


function loginUserMessage(username = "pramu") {
    // if(!username)
    if (username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("pramod"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());
console.log(loginUserMessage("Sweety"));
