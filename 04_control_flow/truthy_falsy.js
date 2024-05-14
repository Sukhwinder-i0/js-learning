const userEmail1 = "Sukhwinder@github.com"

// String - Truthy Value

if (userEmail1) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


const userEmail2 = ""

// Empty - falsy Value
// Empty Array - truthy value 

if (userEmail2) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}



//*************** FALSY Values **************************//

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ************* TRUTHY Values *************************//
// Strings and all non Falsy val are truthy

// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Empty Object");
}


// false == 0    ---> true
// false == ''   ---> true
// 0 == ''       ---> true 


// Nullish Coalescing Operator (??) : null , undefined

let val1 = 43

// val1 = 5 ?? null                       --> 5 (first value)
// val1 = undefined ??  null ?? 4         --> 4
// val1 = null ?? undefined               --> undefined 
// val1 = undefined ?? null               --> null

// console.log(val1);


//************* TERNARY operator ***************//

// condition ? true : false

const age = 27;

age >= 18 ? console.log("Can Vote") : console.log("Can't vote")