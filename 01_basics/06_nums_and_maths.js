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


//******************************MATHS **********************//
                                            