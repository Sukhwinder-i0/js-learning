// 2 types - PRIMITIVE AND NON-PRIMITIVE

// (1) PRIMITIVE :-- (call by values, changes we do happens in copy not in original0)

// 7 types :: String, Number, Boolean, null, undefined, Symbol(to make unique a value), BigInt



/* ((((( DYNAMICALLY TYPED 

// const score = 100
// const scoreValue = 100.3

// const isLogged = false
// const outsideTemp = null;
// let userEmail;

))))))))) */

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)



const bigNumber =595956265999569262655n // stored in bigInt 






// (2) REFERENCE( non primitive ) 

// to master js master OBJECTS and BROWSER WEB EVENTS or BROWSER EVENTS

// Arrays, Objects, Functions

let myObj = {
    name: "Sukhwinder Singh",
    age: 19,
}



// Stack (primitive) :-> get a copy of variable declared

// Heap (non-primitive) :-> reference to original  value (change in original value)


// STACK MEMORY EXAMPLE (1) :--->

let myInsta = "@sukhwinder.7i";

let anotherInsta = myInsta; // Copy taken not original value

anotherInsta = "@myzx_media"; // changes in copy

console.log(myInsta);
console.log(anotherInsta);

// HEAP MEMORY EXAMPLE (2) :--->


let userOne = {
    email: "user.one123@gmail.com" ,
    upi: "user123@ybl"
}

 let userTwo = userOne // refers to original value

 userTwo.email = "user.two@gmail.com" // chnage in otigial value

 console.log(userOne.email)
 console.log(userTwo.email);