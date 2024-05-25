// 2) while Loop


myArr = ["batman", "ironman", "antman"]

let idx = 0;
while(idx < myArr.length) {
    console.log(myArr[idx]);
    idx = idx + 1;
}


// 3) do-whiile loop

let score = 11;

do {
    console.log(`score is ${score}`);
    score += 1;
} while (score <= 10)