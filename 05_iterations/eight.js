// ********* REDUCE ************//

const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce( function (accumulator, curr_value) {
//     console.log(`Accumulator: ${accumulator} and Current Value: ${curr_value}`);
//     return accumulator + curr_value;
// }, 0)


// if accumulator ia not passed the first value of arrray will be taken as accumulator 

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 3999
    },
    {
        itemName: "Web Development Course",
        price: 6999
    },
    {
        itemName: "Mobile development Course",
        price: 9999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]

const finalPrice = shoppingCart.reduce( (acc, item) => acc + item.price,0 )

console.log(finalPrice);