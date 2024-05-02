// to master JS -->> master OBJECTS and EVENTS 


// to methods to make obj -->> LITERAL and CONSTRUCTOR 

// SINGLETON is build via constructor not via literal 
// objects.create 



const mySym = Symbol("key1")
// how to use symbol in objects ?

//*********  OBJECTS LITERALs   ***********/
const JsUser = {
    "Full Name" : "Sukhwinder Singh",
    name: "Sukhwinder",
    [mySym]: "mykey1",
    age: 18,
    location: "Greater Noida",
    email: "sukhwinder@gmail.com",
    isLogged: true,
    lastLoginDays: ["Mon", "Tue", "Fri"]
}

// 2 methods to access properties

// console.log(JsUser.email);
// console.log(JsUser["email"]);   // more appropriate 
// console.log(JsUser["Full Name"]);  // string keys can't be access via dot
// console.log(JsUser[mySym]);


JsUser.email = "Sukhwinder@microsoft.com"
//Object.freeze(JsUser)                          // Can't be modified further
JsUser.email = "Sukhwinder@meta.com"
// console.log(JsUser);



// Adding function to Objects

JsUser.greeting = function() {
    console.log("Hello JsUser");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this["Full Name"]}`);   // to access the same object use this
}

console.log(JsUser.greeting());   // Why undefined along with output ?
console.log(JsUser.greetingTwo());

