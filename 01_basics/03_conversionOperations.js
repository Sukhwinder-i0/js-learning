let score = "33abc"

console.log(typeof score)

let valueInNumber = Number(score)

console.log(typeof valueInNumber)


// CONVERSION IN NUMBERS

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// "Sukhwinder" => NaN
// true => 1 ; false => 0


let isLoggedIn = NaN;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false (FALSIE VALUES)
// null, undefined, NaN => false
// "Sukhwinder Singh" => true 

let aNumber = 33;

let stringNumber = String(aNumber);
console.log(typeof stringNumber);