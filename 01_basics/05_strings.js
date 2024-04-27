const name = "Sukhwinder Singh"
const repoCount = 10

// console.log(name +  " " + repoCount + " Value"); ///     OUTDATED 

//  MODERN--> back ticks (` ${} `)

console.log(`My name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String("MyzX-mediA")

console.log(gameName);
console.log(gameName[9].toLowerCase());
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3)); 
console.log(gameName.indexOf('m'));

//  to  know more about string methods --> go to console browser  
//  via ----> {const gameName = new String("MyzX-mediA")}


const newGame =  gameName.substring(0, 4); //  index 4 is not included // Can't give negative index values

console.log(newGame);

const anotherGame = gameName.slice(-6); // can take negative values

console.log(anotherGame);