// ************  JS EXECUTION CONTEXT ************

// code files ---->> [{}]

// [{}] -->> First becomes -->> GLOBAL EC(depends upon code environment) -->> refered by 'this'
// Global Ec for browser -->> WINDOWS obj

// values in 'this' may be or not

// exceuted in single thread(JS is SINGLE threaded)


// Types of Excution context

// (1) GLOBAL Ec
// (2) FUNCTION Ec
// (3) EVAL Ec         -->>  (a property of global ec)

// js code runs in two phases:

// (1) MEMORY CREATION phase (or Creation phase)  --->> Only Memory allocated for variable declared
// (2) EXECUTION Phase                            --->> Operations, function etc. execcuted



// let's undertand with an example(1):

let val1 = 10;
let val2 = 5;
function addSum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addSum(val1, val2)
let result2 = addSum(10, 2)


// STEPS ---->>

//   (1) Global EC ('this)

//   (2) Memory Phase:::

//                      val1 = undefined
//                      val2 = undefined
//    *1st Cycle*       addSum = definition (the function) 
//                      result1 = undefined
//                      result2 = undefined



//   (3) Execution phase:::

//                            val1 = 10;
//                            val1 = 5;      
//                            addSum ------>>         _______________________________
//                                                   [                               ]
//                                                   [   new variable environment    ]
//                                                   [              +                ]
//                                                   [    Execution thread           ]
//                                                   [                               ]
//                                                    -------------------------------
//                                                                      |
//                                                                      |
//                                                                      |
//                                                                      |
//          ---------------------------------------------------------------------------
//         |                                                                           |
//         |                                                                           |
//    (MEMEORY PHASE):                                                                 |
//              val1 = undefined                                                       |
//              val2 = undefined                                              ( EXCECUTION Context )
//              total = undefined                                                      num1 = 10   
//                                                                                     num2 = 5   
//                                                                                     total = 15
//                                                                                     

