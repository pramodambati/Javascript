const coding = ["js", "ruby" , "java", "python", "cpp"]

// Higher Order Function

// coding.forEach( function (item) {
//     console.log(item);
// })


coding.forEach( (val) => {
    // console.log(val);
})

function printMe(item) {
    // console.log(item);
}

// coding.forEach(printMe) // Here we are giving function refernce  not calling it.

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    // console.log(item);
    console.log(item.languageName);
    // console.log(item.languageFileName);
})

/*
Summary(As I understood) :
We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .
We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.
Corrections Are Welcomed.🙃*/