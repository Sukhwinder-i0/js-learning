const score = 400;
const balance = new Number(100)

console.log(score);
console.log(balance);

console.log(balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(2)); // upto decimal numbers (PRECISION value)

const otherNumber = 123.8954

console.log(otherNumber.toPrecision(2)); // prints  2 digits rest in exponential

console.log(otherNumber.toPrecision(3)); // rounds off upto 3 digits

console.log(otherNumber.toPrecision(4)); // rounds off after 4 digits

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); 

// put commas --- default --->> USA
// 'en-IN' ---->> indian


// max and min value function for cp


//******************************  MATH  *************************//

console.log(Math)
console.log(Math.abs(-7));
console.log(Math.round(3.78939));

console.log(Math.ceil(4.5555));   // 5   //     UPPER value 
console.log(Math.ceil(-8.578));   // 

console.log(Math.floor(6.8444));   //  6      // LOWER value 
console.log(Math.floor(-2.444));    // 
 
console.log(Math.min(1, 4, 3, 9));     
console.log(Math.max(1, 4, 3, 9));    



console.log(Math.random());
console.log((Math.random() * 10) + 1); 
console.log(Math.floor((Math.random() * 10) + 1));

// Random number in RANGE 

const min = 10;
const max = 20;


// console.log(Math.floor((Math.random() * (max - min)) + min)); // if not 1 added then 20 will mmot be generated



// ********* IMPORTARTANT LINE *********************//

console.log(Math.floor((Math.random() * (max - min + 1)) + min));  // [10, 20] 


