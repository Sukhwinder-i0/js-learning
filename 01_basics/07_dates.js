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


//let myCreatedDate = new Date(2023, 0, 23)         // months start from 0 in js; 0 -->> jan
//console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("04-30-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  // exact date in miliseconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000))  // exact date in seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

 
let modifiedDate = newDate.toLocaleDateString('defaalt', {
   weekday: "long"
})

console.log(modifiedDate);

// ctrl + space to get suggestions//




