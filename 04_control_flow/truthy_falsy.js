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

// "0", 'false', " ", [], {}, function(){}, 