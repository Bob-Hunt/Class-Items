//Warm up white boarding challenges
//Complete the challenge within a google doc
// Set up two varibles equal to any two integers
// Write a conditional that checks if the first varible is divisible by the second
// If it is console log `value of ${a} is divisble by value of ${b}`
// If it is not console log the remainder

let num1 = 35;
let num2 =7;

// Switch:
switch(true){
	case (num1 %num2 === 0):
		console.log(`value of ${num1} is divisible by ${num2}`);
		break;
	default:
		console.log(num1 %num2 === 0);
}

// If-Else:
if (num1 %num2 === 0){
	console.log(`value of ${num1} is divisible by ${num2}`);

} else {
	console.log(num1 %num2 === 0);
}


//Checking a string
//Complete the challenge within a google doc:
// STEP 1
//Write a conditional that checks if a string is empty
//If it is console log 'Please type something'
// STEP 2
//If it is not console log the string
// STEP 3
//add to your conditional to check if the string has more than 10 characters
//if it does console log please type less

let str1 = '';
let str2 = 'string';
let str3 = 'This is the beginning of a very very very verbose string….'

function checkString (str){
	if (str.length === 0){
		console.log('Please type something.');
	} else if (str.length > 10){
		console.log('Please type less.');
	} else {
		console.log(str);
    };
    
};

checkString(str1);
checkString(str2);
checkString(str3);

