var c = 200 
let a = 1

if (true) {
    let a= 10
    const b = 100
    c = 20
    // console.log("INNER: ", a);
}

// console.log(c);
// console.log(a);

// ********************************************************************** 

// const - Block scope and can't be redeclared
// let - Block scope  and can be redeclared
// var - Global scope and can be redeclared


// Diffrenet scopes in NODE environment and CONSOLE browser

// *******************************************************************************************************


function one() {
    const username = "Sukhwinder"

    function two() {
        const website = "github"
        console.log(username)
    }

   // console.log(website);  // block scope of website

    two()

}

one()


// CLOSURE - Child function can access parent function's variable, also in if-else
// DEtail in enlish channel video

if (true) {
    const username = "Sukhwinder"
    if(username === "Sukhwinder") {
        const website = " github"
        console.log(username + website)
    }

   // console.log(website);  // --- errors --->> block scope
}

// console.log(username);   // --- errors --->> block scope



// **************** INTRESTING Concept :--> (HOSTING)  *************************//


console.log(addOne(2))  // can be access

 function addOne(num) {
    return num + 1;
 }



// -------------------------------------------

// addTwo(3)  // can't be access before initialization 

 const addTwo = function(num) {
    return num + 2;
 }