/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

// IF-Else-If:

let FB = 15;

if ((FB %3 === 0) && (FB %5 ===  0)){
    console.log('Fizz Buzz');
} else if (FB %3 === 0){
    console.log('Fizz');
} else if (FB %5 ===  0){
    console.log('Buzz');
}


// Switch:

let FB2 = 5;

Switch(true){
    case(FB2 %3 === 0) && (FB2 %5 === 0):
        console.log("Fizz Buzz");
        break;
    case(FB2 %3 === 0):
        console.log("Fizz");
        break;
    case(FB2 %5 === 0):
        console.log("Buzz");
        break;
    default:
        break;
}

// Ternary:

let FB3 = 100;

((FB3 % 3 === 0) && (FB3 % 5 === 0)) ? console.log("Fizz Buzz") :
(FB3 % 3 === 0) ? console.log("Fizz") :
(FB3 % 5 ===0) ? console.log("Buzz"):
console.log(FB3);