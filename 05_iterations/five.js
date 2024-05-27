// For - Each loop

const coding = ["js", "cpp", "java", "python", "typescript"]

// coding.forEach( function (val) {
//     console.log(val);
// } )


// coding.forEach( (val) => {
//     console.log(val);
// } )


function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, array) => { 
    console.log(item, index, array);
})


// ["", "", ""]
// [{}, {}, {}]

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
        languageName: "c++",
        languageFileName: "cpp"
    }

]

myCoding.forEach( (item)=> {
    console.log(item.languageFileName);
} )