// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     lowercase

const accountId = 1234; // You cannot change the value again 
let accountEmail = 'pramodambati1@gmail.com';
var accountPassword = '12345'; // Block Scope problem { } so we don't use var in ES6
accountCity = 'Hyderabad'; // note written without any variable but not at all good.
let accountState; // the result is undefined

// single line comment (ctrl + l)
// accountId = 2; // Assignment to constant variable not allowed.

accountEmail = 'pramodreddy.ambati1234@gmail.com'
accountCity = 'Chennai'
accountPassword = '93900'
console.log(accountId);

// to print in tabular structure 


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail, accountPassword,accountCity, accountState])