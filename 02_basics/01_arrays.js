// ***********  ARRAYS  ******************//

const myArr = [0, 4, 6, 8, "Sukhwinder"]                             // method - 1 // prototype access inside prototype
const myArr0 = new Array(9, 5, 4, 2, "Sukhwinder Singh")            // method -2

// array-copy-operations create shallow copies ( whose properies share the same refrence point) // Deep copy -->> vice versa

// console.log(myArr[4]);


// *********** ARRAY METHODS  *************//

// myArr.push(9, 1008)             // adds from last
// myArr.pop()                     // deletes from last


// myArr.unshift(34, 19)         // adds at start     
// myArr.shift()                 // deletes from start

// console.log(myArr.includes("singh"));
// console.log(myArr.indexOf("Sukhwinder"));

// const newArr = myArr.join();           // adds all the element into string
// console.log(newArr);
// console.log(typeof newArr);

// console.log(myArr);


// ******** SLICE and SPLICE  ***********//

console.log("A ", myArr);

// slice don't change in original array

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);


// splice do change in original array 

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr);


