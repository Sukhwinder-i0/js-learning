// const tinderUser = new Object()   // singleton object <<----

const tinderUser = {}   // non  singleton object

// BOTH are SAME returns empty object


tinderUser.id = "xyz899"
tinderUser.name = "ABC"



const regularUser = {
    email: "Sukhwinder@gitHub.com",
    fullname: {
        userfullname: {
            firstname: "Sukhwinder",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// if a value doesn't exist them use ?
// console.log(regularUser.fullname?.userfullname.firstname);



// ************  MERGING of objects  *************//

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}    // -->> PROBLEM -- objects comes in object 

// const obj3 = Object.assign(obj1, obj2)     // it also fine
// const obj3 = Object.assign({}, obj1, obj2)    // good practice
// console.log(obj3);

/* Object.assign(Target, Source)
that's why we take an empty object as a target */


const obj0 = {...obj1, ...obj2}     // used in 90% cases
console.log(obj0);



// values came from database in form of array separated by commas
// OBJECTS in array

const user = [
    {
        id: 1,
        email: "user1abc"
    },
    {
        id: 2,
        email: "user2abc"
    },
    {
        id: 3,
        email: "user3abc"
    }
]

console.log(user[1].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser));   // PUTS all the KEYS in ARRAY that can be used further
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  // Makes arrays of keys and values 

// console.log(typeof Object.keys(tinderUser));  //doesn't change it's type

console.log(tinderUser.hasOwnProperty('Name'));
console.log(tinderUser.hasOwnProperty('id'));




// ********************* OBJECTS: DE-STRUCTURING  ******************************************//

const course = {
    courseName: "JS",
    price: 999,
    courseInstructor: "Sukhwinder Singh"
}

// extarcting values 

//console.log(course.courseInstructor);

// const {courseInstructor} = course;
// console.log(courseInstructor);

const {courseInstructor: instructor} = course;   // can give a seperate name
console.log(instructor); 



// *******************  JSON  *********************************//

// -->  written in {} but not have name 
// -->  Keys and Values are STRINGS

// {
//     "name" : "Sukhwinder Singh",
//     "coursename" : "JS",
//     "price": 0
// }

// example:-->  https://api.github.com/users/hiteshchoudhary

//fetch API -->> get DATA -->> convert to OBJECT -->>  get one by one values

// many times API gets in form of ARRAYS  

// [
//     {},
//     {},
//     {}
// ]


// JSON formater tool -->> to study APIs data

