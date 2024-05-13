// If


// <, >, <=, >=, !=, ==  onlt checks value
//  ===, !==

// Strict Equal ===   checks value + data types


// const score = 200;

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(power);      //  block scope



// *******  SHORT HAND NOTATION  ****************//

const bal = 1000;

if(bal > 800) console.log('test1');      // prefer for only one line 

if(bal > 400) console.log("test2"), console.log("test3");    // not much readable (AVOID It)




// Eg-------

const userLoggedIn = true;
const debitCard  = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {              // AND - Statement
    console.log("Allowed to buy");
}


if(loggedInFromGoogle || loggedInFromEmail) {      // OR - Statement
    console.log("user logged in");
}
    




