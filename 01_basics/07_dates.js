// DATES 

   //in js is long standing pain point that's why in future --------->>>> Temporal.Now.instant();

let myDate = new Date();

console.log(myDate);

console.log(myDate.toString());  // Readable format

console.log(myDate.toDateString()); // DATE and DAY 
console.log(myDate.toTimeString()); // TIME
console.log(myDate.toLocaleString());

// console.log(myDate.toJSON); 
// console.log(myDate.toLocaleDateString()); // DATE - native format -->> DEFAULT - usa
// console.log(myDate.toLocaleString()); // DATE and Time -- netive
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());


console.log(typeof myDate);