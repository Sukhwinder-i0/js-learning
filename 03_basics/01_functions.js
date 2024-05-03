//******************** FUNCTIONS ************************** */


function myName() {
    console.log("S");
    console.log("U");
    console.log("K");
    console.log("H");
    console.log("W");
    console.log("I");
    console.log("N");
    console.log("D");
    console.log("E");
    console.log("R");
}

//  myName        // reference to function
//  myName()      // Execution

// function addTwoNumbers(num1, num2) {          // Parameters (in definition)
//     console.log(num1 + num2);
// }

// const result = addTwoNumbers(2, 3)    //  can't store : becuz the fun. is returning nothing

//  addTwoNumbers(2, 3);                 // Arguements (in calling function)
//  addTwoNumbers(2, "3")
//  addTwoNumbers("a", 3)
//  addTwoNumbers(2, "a")
//  addTwoNumbers(2, null)
//  addTwoNumbers(2, undefined)


function addTwoNumbers(num1, num2) {
    // res = num1 + num2;
    // return res;
    return num1 + num2;

    console.log("Sukhwinder");  // code won't executated after return
}

const result = addTwoNumbers(2, 3)

console.log("result: ", result);

// ---------------------------------------------- //

// function  loginUserMessage(username) {
//     return `${username}, just logged in`
// }

// loginUserMessage("Sukhwinder")   // Haven't print yet
// console.log(loginUserMessage("Sukhwinder Singh"));

// If no value passes -->> undefined
// console.log(loginUserMessage());


function  loginUserMessage(username) {
    if(!username) {                       // <<-- professional  way or -->> (username === undefined)
        console.log("Please Enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());


// --------------------------//

function  loginUserMessage2(username = "Abc") {
    if(!username) {                       // <<-- professional  way or -->> (username === undefined)
        console.log("Please Enter a username");
        return;
    }
    return `${username}, just logged in`
}

console.log(loginUserMessage2());

console.log(loginUserMessage2("Sukhwinder Singh"));




