const marvel_heros = ["IronMan", "Thor", "SpiderMan"]
const dc_heros = ["BatMan", "SuperMan", "AquaMan"]

// marvel_heros.push(dc_heros) // It won't merge takes has a single array Element
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][0]);


// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros) // [ 'IronMan', 'Thor', 'SpiderMan', 'BatMan', 'SuperMan', 'AquaMan' ]

const all_new_heros = [...marvel_heros, ...dc_heros] // Majority prefers this. 

// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [5,4]]]

const flatArray = another_array.flat(Infinity)

console.log(flatArray)


// The Array.isArray() static method determines whether the passed value is an Array.

console.log(Array.isArray("pramod")) // false

console.log(Array.isArray('[]'));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false


// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(Array.from("pramod"))
console.log(Array.from({name: "pramod"})) // Intresting gives empty array []


// The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

let score1 = 100
let score2 = 200
let score3 = 300

// Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3))
