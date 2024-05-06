// ***************** THIS  --> to refer the same/current context ****************************//

const user = {
    username: "Sukhwinder",
    website: "Github",

    welComeMessage:  function() {
        console.log(`${this.username}, welcome to github`);    // but if user.username -->> No Error [code will be executed]

        // console.log(this);
    }
    

}

// user.welComeMessage()  
// user.username = "sam"    // CONTEXT is changed 
// user.welComeMessage()


// console.log(this);   // empty object in node environment, but WINDOW global object in browser 


//  *********** THIS in functions  ********//

function chai() {
    let username = "Sukhwinder"
    // console.log(this);
    console.log(this.username);   //  this context working only in objects
}

// chai()


const code = function () {
    let username = "Sukhwinder"
    console.log(this.username);
    console.log(this);
}

// code()


const code1 =  () => {
    let username = "Sukhwinder"
    console.log(this.username);
    console.log(this);              // gives empty object in arrow function 
}


code1()




// ********************  ARROW FUNCTION  **********************//

//  const addTwo = (num1, num2) => {
//     return num1 + num2;
//  }



// const addTwo = (num1, num2) => num1 + num2    // implicit return -->>

// const addTwo = (num1, num2) => ( num1 + num2 )  // no need to write return and no curley braces

// const addTwo = (num1, num2) => ({username: "Sukhwinder"})
 

// console.log(addTwo(1,6));


// let say for an example

// const myArray = [2, 5, 7, 4, l, 9, 0] 

// myArray.forEach(function() {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())