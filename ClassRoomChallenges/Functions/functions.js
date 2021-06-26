/*
    FUNCTIONS!!
​
    A function are basically a set of code that can be ued over and over again. It is mainly used to reduce code redundancy. For example, if I am going to be making a lot of soups and curries, I will create a batch of chicken stock to be used with all of my recipes. Now in this case, chicken stock is my function.
​
    (keyword) (name of function)
    function myFunction(){
        (function body)
        logical statements
    }
​
    //invocation or function call
    myFunction();
​
*/
​
function thaiCurry(){
    console.log("This is my thai curry example");
}
​
thaiCurry();
​
​
/*
    Parameters:
    Using parameters makes the function more accessible for different inputs.
    The parameters are just like variables except that the values of these variables are defines when we call the function and are not assigned within the function itself.
​
    function myFunction(param1, param2,param3,...){
        //statements using multiple parameters
    }
*/
​
function thaiCurry(ingredient1, ingredient2){
    console.log(`My curry has ${ingredient1} and ${ingredient2} in it`)
}
​
thaiCurry('tomato paste', 'meat')
thaiCurry('spices', 'meat')
​
//Function to add two numbers
                //parameters
function addition(num1, num2){
    let sum = num1 + num2;
    console.log(`The sum of the numbers is ${sum}`)
}
        //arguments
addition(3, 5);//num1 = 3, num2 = 5
addition(2, 10)
addition(15, 35)
​
//Default Parameters
function addition2(num1, num2, num3 = 10){
    return num1+ num2+ num3
}
​
console.log(addition2(2, 8, 15))
​
​
/*
    Return:
    The return keyword ends function execution and specifies a value to be returned. Any code after the return statement will not be executed.
    A return keyword without an expression after it will cause the function to return undefined.
​
*/
​
function thaiCurry(ingredient1, ingredient2){
    return `My curry has ${ingredient1} and ${ingredient2} in it`
}
​
let curry = thaiCurry('spices', 'meat'); //`My curry has spices and meat in it`
console.log(curry)
​
function addition(num1, num2){
    return num1 + num2
}
​
let sum = addition(5, 10)
console.log(`The sum of my numbers is ${sum}`)
​
​
/*
    Anonymous Functions or Arrow Functions
    Arrow functions are a compact way of writing a function.
​
    //function expression
    let myFunction = () => {
        //function body
    }
​
    myFunction();
*/
​
//Concise Body
let greet = () => 'Hello World'
console.log(greet())
​
/*
    The removal of the return keyword and they curly brackets in the arrow function works only 
    when the function has one statment in the body. 
    Concise body functions use return by default.
*/
​
//Block Body
​
let add = (num1, num2) => {
    console.log("The sum of my number is");
    return num1 + num2;
}
​
console.log(add(4, 19));
​
let add = (num1, num2) => `The sum of my numbers is ${num1 + num2}`
console.log(add(4, 19));
​
/*
    Challenge
    Write a function that returns milliliters on taking ounces as the input.
​
    Hint: 1 oz = 29.57ml
​
*/
​
function convert(oz){
    let ml = oz * 29.57;
    return ml;
}
​
console.log(convert(7))

// Function declaration?

// Function Expression is when we store a function inside of a variable:
let myFunction = () => {
    // function body
}

// Consise Body: doesn't need curly brackets or 'return'
let greet = () => 'Hello World'

// Block Body
let add = (num1, num2) => {
    console.log(`the sum of my numbers is`);
    return num1 + num2;
}
//
console.log(greet());
console.log(add(4, 19));

/*
    Challenge
    Write a function that returns milliliters on taking ounces as the input.
​
    Hint: 1 oz = 29.57ml
*/

// Block Body
function toMillimeters(oz){
    let mill = oz * 29.57;
    return console.log(mill);
}

toMillimeters(24);
toMillimeters(1);

// Consise Body
let toMil= (oz) => console.log(oz * 29.57);

toMil(1);

// Function expression
let convertOzToMil = function(oz){
    console.log(oz * 29.57);
}

convertOzToMil(1);
convertOzToMil(10);

// End of Challenge //