// Array:  enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// JavaScript arrays are resizable and can contain a mix of different data types

// JavaScript array-copy operations create shallow copies(Referenced). (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// We can declare arrays in different ways

// const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["IronMan", "Thor", "Hulk"] 


// You can also create an array, and then provide the elements:

const carBrands = [];
carBrands[0]= "Saab";
carBrands[1]= "Volvo";
carBrands[2]= "BMW";

// Using the JavaScript Keyword new
// The following example also creates an Array, and assigns values to it:

const cars = new Array("Benz", "Volvo", "BMW");
// console.log(cars[1]);

// Array Methods

const myArr = [0, 1, 2, 3, 4, 5]

// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

// myArr.push(6)
// const count = myArr.push(7) // Gives the length
// console.log(myArr);
// console.log(count); 


//  The removed element from the array; undefined if the array is empty.

// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

// myArr.pop()
// console.log(myArr);


// myArr.unshift("pramod")
// console.log('unshift', myArr);

// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array. Refer MDN
// myArr.shift()
// console.log('Shift' ,  myArr);


/*The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. 

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
*/

// const newArr = myArr.join()
// console.log('original array');
// console.log( myArr)
// console.log('after using join method');
// console.log(newArr);
// console.log(typeof newArr);


// Slice , Splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3) // last range not included

console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3) // last range included and also manipulates original array.
console.log("C ", myArr)
console.log(myn2);
