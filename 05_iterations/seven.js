const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums);


const newNums2 = []
myNumbers.forEach( (num) => {
    num += 10
    newNums2.push(num)
})

// console.log(newNums2);


// ********* CHAINING ***********//

const newNums3 = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 10 )
                .filter( (num) => num >= 50)



console.log(newNums3);