const myObject = {
    js: 'javascript', 
    cpp: 'c++',
    rb: "ruby",
    py: "python",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('AP', "Amaravati")
map.set('TJ', "Hyderabad")
map.set('TN', "Chennai")

// console.log(map);
// for (const key in map) {
//    console.log(key); // No output
// }