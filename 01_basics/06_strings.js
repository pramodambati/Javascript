const name = "pramod"
const repoCount = 2

// console.log(name + repoCount + " repositories"); // OUtdated

// ` String interpolations i.e you create place holders inside them whatever variable you have you can directly inject there like ${varName}`


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pramod-reddy com') // Declaration of String.

// console.log(gameName[0]); // access value pair
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // It has not changed the original value becasue call by value stores data in Stack
// console.log(gameName.charAt(2)) // what is at 2 position
// console.log(gameName.charAt(6)) 
// console.log(gameName.indexOf('a')) // 
// console.log(gameName.indexOf('r')) // 
// console.log(gameName.indexOf('z')) // 
// console.log(gameName.indexOf(' ')) // 

const newString = gameName.substring(0,4) // We Cannot give -ve values
console.log(newString)

const anotherString = gameName.slice(-12 , 4) // We Can give -ve values
console.log(anotherString)

const newStringOne = "      pramod        " // Input user unknownly/delibrately will enter
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://google.com/pramod%20reddy"

console.log(url.replace('%20', '-'));
console.log(url.includes('pramod'));
console.log(url.includes('shashi'));

console.log(gameName.split(" ")); // we got on array based on dash " "