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

// const newNums = myNums.filter( (num) => {
//     return num > 4                                    // return keyword is required if scope is started
// } )


const newNums = []

newNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )




// console.log(newNums);




const books = [

    { title: 'Book One', genre: 'Fiction', publish: 1981,
    
    edition: 2004 },
    
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
    
    edition: 2008},
    
    { title: 'Book Three', genre: 'History', publish: 1999,
    
    edition: 2007},
    
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
    
    edition: 2010},
    
    { title: 'Book Five', genre: 'Science', publish: 2009,
    
    edition: 2014},
    
    { title: 'Book Six', genre: 'Fiction', publish: 1987,
    
    edition: 2010},
    
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},

    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},

    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},

];



const historyBooks = books.filter( (bk) => bk.genre === "History")

// console.log(historyBooks);

const booksAfter2007 = books.filter( (bk0) => {
    return bk0.publish >= 1995 && bk0.genre === "History"
})

console.log(booksAfter2007);