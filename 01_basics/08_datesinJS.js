// Dates
 
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 1, 14, 10, 39) // Month starts with Zero in JS
// let myCreatedDate = new Date("2023-01-14") // here month start as 1 yyyy-mm-dd
let myCreatedDate = new Date("02-13-2023")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now() // Date.now() returns the number of milliseconds since January 1, 1970 00:00:00 UTC:

// console.log(myTimeStamp);
// console.log(myCreatedDate)
// console.log(myCreatedDate.getTime()) //Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
// console.log(Math.floor(Date.now()/1000)) // To convert to seconds floor to avoid decimals or use roundoff

// Calculate the number of years since 1970/01/01:
/*
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);
console.log(years);
*/

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

//Control space you will see the all properties thanks to the intellisense


// We can customize the date by using localeString explore this topic using mini projects timezones are regulary used