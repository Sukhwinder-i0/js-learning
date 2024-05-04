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
    if(!username) {                                // <<-- professional  way or -->> (username === undefined)
        console.log("Please Enter a username");
        return;
    }
    return `${username}, just logged in`
}

// console.log(loginUserMessage2());
// console.log(loginUserMessage2("Sukhwinder Singh"));




// *******************************************************************************************//


// rest operator (...)  --->>  gives a array of all values after ... //

function calculateCartPrice(...num) {
    return num;
}

console.log(calculateCartPrice(190, 199, 200, 500)); 


// OR // interview Question: what will be the output?

function calculateCartPrice2(val1, val2, ...num) {    
    return num;
}

console.log(calculateCartPrice2(190, 199, 200, 500));    // output -- >> [ 200, 500 ]


// ---------------------------------------//
// Passing object in function

const product = {
    productName: "T-Shirts",
    location: "Greater Noida", 
    price: "199"
}

function handleObject(anyobject) {
    console.log(`${anyobject.productName} are available in ${anyobject.location} for ${anyobject.price} rupees`)
}

handleObject(product);

// OR Directly passing object in function //

handleObject ({
    productName: "Shirts",
    location: "Delhi",
    price: 399

})


// ********* Passing ARRAYS in FUNCTIONS ****************//

const myArr = [1, 4, 3, 8, 5] 

function returnSecondVal(anyarray) {
    return `second value is ${anyarray[1]}`
}

console.log(returnSecondVal(myArr))

// Passing directly //

console.log(returnSecondVal([100, 400, 200, 300]))