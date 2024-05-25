// for of 




const arr = [1, 2, 3, 4, 6]

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// ********* MAPS **************//

const map = new Map() 
map.set("IN", "India")
map.set("USA", "United states of America")
map.set("NZ", "NewZealand")

// console.log(map);   // The Map object holds key-value pairs and remembers the original insertion order of the keys

for (const [key, value] of map) {
    console.log(key, "-", value);
}



// for of --- objects

const myObject = {
    game1: "NFS",
    game2: "Spy"
}

// for (const [key, value] of myObject) {
//     console.log(key, "-", value);                 --> Not Iterable by this way
// }


