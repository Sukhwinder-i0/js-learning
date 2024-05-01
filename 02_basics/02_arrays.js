const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // takes dc_herps array as a single element // changes in existing array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)  // combines and returns new array without modifieying existing
// console.log(allHeros);

// ANother method (easy) ---->> || SPREAD method || --> most preferred 

const all_new_heros = [...marvel_heros, ...dc_heros]    // 
console.log(all_new_heros);




