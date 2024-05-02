const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // takes dc_herps array as a single element // changes in existing array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)  // combines and returns new array without modifieying existing
// console.log(allHeros);

// ANother method (easy) ---->> || SPREAD method || --> most preferred 

const all_new_heros = [...marvel_heros, ...dc_heros]    // all elements have spread 
console.log(all_new_heros);



const anotherArr = [1, 2, 3, [8, 0, 6], 7, [9, [11, 18]]]
const newAnotherArr = anotherArr.flat(Infinity)    // turns into single aray // parameter is depth number
console.log(newAnotherArr);


// When we needed other data in form of array

console.log(Array.isArray("Sukhwinder"))
console.log(Array.from("Sukhwinder"))
console.log(Array.from({name: "Sukhwinder"}));   // INTRESTING ---->> here it is unable to form array thst's  why empty array 

console.log(Array.from([100, 2, 3], (x) => x + x))



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // returns a new array from a set of elements 