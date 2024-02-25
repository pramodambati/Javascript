//  Immediately Invoked Function Expression (IIFE)

// function chai() {
    // named iffe
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai2() {
    console.log(`DB CONNECTED`);
})();

// For context where to stop ;
// Here to end the first code we use semicolone ;
// (funciton def)(execution call)


// Due to pollution of global scope,Many a times, we have thrown it to remove the pollution of the global scope

( (name) => {
    // simple iffe or unnamed iffe
    console.log(`DB CONNECTED TWO ${name}`);
}) ("pramod")


/*

Full code + notes + Explanatory comment
// Avoiding Global Scope Pollution:

// Variables declared inside the IIFE are not added to the global scope. This helps in preventing naming conflicts with other scripts and libraries.
// Encapsulation:

// It allows encapsulation of variables. Variables declared inside the IIFE are not accessible from the outside, providing a level of privacy.
// Isolation:

// It helps in isolating code. Variables declared inside the IIFE do not interfere with variables in the outer scope, and vice versa.
// Module Pattern:

// IIFE is often used in creating a module pattern, allowing the creation of private and public methods within the same scope.
// Avoiding Hoisting Issues:

// By using a function expression, you avoid hoisting issues that can occur with function declarations.
// Immediately Invoked Function Expression (IIFE) - Named IIFE
(function chai() {
    console.log(`DB connected`);
})();
// Output: DB connected

// If two IIFE are used, it's a good practice to end each with a semicolon to avoid potential issues.

// Immediately Invoked Function Expression (IIFE) - Unnamed IIFE
(
    (name) => {
        console.log(`DB connected ${name}`);
    }
)('Postgres');
// Output: DB connected Postgres

// Explanation:
// - The first IIFE is named 'chai' and logs "DB connected" immediately when the script runs.
// - The second IIFE is unnamed and takes a parameter 'name',  followed by the provided name ('Postgres').
// - Both IIFE syntaxes are valid, and the use of parentheses around the function helps to indicate that it's a function expression being invoked immediately.

// Note: Ending IIFE with semicolons is especially important when you are combining multiple JavaScript files into one, to prevent unexpected issues due to automatic semicolon insertion.*/
