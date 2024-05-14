// for 

// for (let i = 0; i <= 10; i++) {
//     const element = i
//     // if(i == 7) {
//     //     console.log("7 is best number");
//     // }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 1; j <= 10; j++) {
//       // console.log(`Inner loop value ${j} and inner loop value ${i}`);
//       console.log(`${i} * ${j} = ${i * j}` );
//     }
// }



let myArr = ["batman", "ironman", "superman"]

for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]); 
}


// Break and Continue 

for (let i = 1; i < 20; i++) {
    
    if (i == 5) {
        console.log('Detected 5 but continued');
        continue;
    }

    if (i == 10) {
        console.log('Detected 10  and breaked');
        break;
    }

    console.log(`Value of i is ${i}`)
    
}