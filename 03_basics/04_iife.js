// Immediately Invoked Function Expressions (IIFE)

// 1) to immediately start DATA-BASE connection as, the file gets starts

// 2) to avoid the pollution from global scope


// function code() {
//     console.log(`DB Connected`);
// }

// code()



//***************  IIfe **************

   // Named IIFE

( function code() {
    console.log(`DB Connected`);
} ) () ;                        // need to end this invoked function

 
    // Simple IIFE

( () => {
    console.log(`DB CONNECTED`);
} ) () ;


    // Parameters passing

( (siteName) => {
    console.log(`DB CONNECTED to ${siteName}`);
} ) ('GitHub') ;


