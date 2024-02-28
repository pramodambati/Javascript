// for of loop Array specific loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num  of arr) {
    // console.log(num);
}

for (const num  of "pramod") {
    // console.log(num);
}


// Maps

const map = new Map()
map.set('AP', "Amaravati")
map.set('TJ', "Hyderabad")
map.set('TS', "Hyderabad")
// map.set('TJ', "Bhagyanagar")
map.set('TN', "Chennai")
map.set('TJ', "Hyderabad")

// console.log(map);


for (const key of map) {
    // console.log(key);
    
}

for (const [key, value] of map) {
    // console.log(key, ': ', value);
    
}

// myObject is not iterable 


const myObject = {
    "game1" : 'Pubg',
    "game2" : "spiderman"
}
// const myObject = {
//     game1 : 'Pubg',
//     game2 : "spiderman"
// }


// This is not the correct syntax for iterations on Object

for (const [key, value] of myObject) {
    console.log(key, ': ', value);
}

