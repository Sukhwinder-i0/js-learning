// OBJECT

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);
}


// ARRAY 

const programming = ["js", "rb", "cpp", "swift"]

for (const key in programming) {
    console.log(`${key} - ${programming[key]}`);
}


// for of loop gives the value but for in loop gives the key


// MAP

// const map = new Map() 
// map.set("IN", "India")
// map.set("USA", "United states of America")
// map.set("NZ", "NewZealand")

// for (const key in map) {               // NOT Possible
//     console.log(key);            
// }
