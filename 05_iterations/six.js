// For Each -- don't return value,  can't be stored

const coding = ["js", "cpp", "java", "python", "typescript"] 

// const values = coding.forEach( (item) => {
//     return item                                    
// } )
          
// console.log(values);



// *** FILTER ***  returns value, can be stored

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);

// OR

const newNums = myNums.filter( (num) => {
    return num > 4                                    // return keyword is required if scope is started
} )


console.log(newNums);
