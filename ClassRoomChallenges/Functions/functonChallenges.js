// COUNTING SUM CHALLENGE
​
// Write a function that adds together all the numbers between any two numbers.
// Your function will accept two parameters. One for the starting number and another for the ending number.
// console.log the final sum of the numbers. 
​
function countingSum(num1, num2){
    let sum = 0;
    for (let i = num1 +1; i < num2; i++){
        sum += i;
    }
    return console.log(sum);
}

countingSum(1,100); // 4949
countingSum(35, 77) // = 2296
countingSum(234, 567) // = 132966
countingSum(100,1);


// **** Below is not returning correct value for the fourth function call.

function countingSum(num1, num2){
    let sum = 0;
    switch(true){
        case (num1 < num2):{
            // let sum = 0;
            for (let i = num1 +1; i < num2; i++){
                sum += i;
            }
            return console.log(sum);
            break; 
        }
        case (num1 > num2):{
            let sum2 =0;
            for (let i = num2 - 1; i < num1; i++){
                sum2 += i;
            }
            return console.log(sum2); 
            break;
        }
    }
}

countingSum(1,100); // 4949
countingSum(35, 77) // = 2296
countingSum(234, 567) // = 132966
countingSum(100,1); // 4950