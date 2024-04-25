// console.log("2" + 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


// Equality check == and comparisions < > <= >= work differently
// Comparision converts null to a number,  treating it as 0
// that's why (3) null >= 0 is true and (1) null > 0 is false

// console.log(undefined == 0)
// console.log(undefined >= 0)
// console.log(undefined <= 0)

// AVOID THESE CONVERSIONS AND COMPARISIONS (confusing)


// STRICT CHECK (===)

console.log("2" === 2); // checks Data types too
console.log("2" == 2); // check only values