





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



let FB3 = 3

((FB3 % 3 === 0) && (FB3 % 5 === 0)) ? console.log("Fizz Buzz") :
(FB3 % 3 === 0) ? console.log("Fizz") :
(FB3 % 5 ===0) ? console.log("Buzz"):
console.log(FB3);