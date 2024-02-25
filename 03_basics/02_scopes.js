var c = 300

let a = 100

if (true) {
    let a = 10
    // console.log("Inner: ", a);
    const b = 20 
    // var c = 30
    c = 30 // This also creates the scope problem
}

// whatever you write inside it should not come outside i.e scope

// console.log(a);
// console.log(b);
// console.log(c);



// Nested Scope

function one(){
    const username = "pramod"

    function two() {
        const website = "youtube"
        // console.log(username);
    }

    // console.log(website) // No scope so website is not defined.

    two()
}

one()


if (true) {
    const username = "pramod"
    if (username === "pramod") {
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website)
}

// console.log(username)


// +++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++++++++++++++

// addone function

console.log(addone(5));
function  addone(num) {
    return num + 1
}
// addTwo expression both are functions but naming is different
addTwo(5) 

// Hoisting

const addTwo = function(num) {
    return num + 2
}
