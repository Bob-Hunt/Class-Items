/*
FOR OF LOOPS
    -For Of Loops parse through an iterable list of numbers -
    so that makes them great for working with arrays.
    -- Arrays contain what are known as iterable properties.
    Each property or value in an array, contains its own index.

    let arr = ['chicken', 'turkey', ]

*/

/* BRONZE
​
    - Using a for of loop, console.log the name of each pie from the 
    pies array.
​
*/
​
let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd'];

for (let pie of pies){
    console.log(pie);
}

/* SILVER
    - Have the conditional check if EACH pie from the pies array is of the type 'apple'.
    - If it is of type apple console log ____ pie is of type apple otherwise
     console log  _____ pie is not of type apple
​
    - Use google to search for an array method that checks if an array includes a certain value
​
*/
let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd'];

for (let pie of pies){
    if (pie.includes('apple')){
    console.log(`The ${pie} is of the apple type!`);
    } else {
        console.log(`The ${pie} is not of the apple type!`);
    }
}

/* GOLD
​
 - Nest a conditonal inside of the for of loop that checks if a 
    single pie from the pies array is of the type 'fruit pie' - ie. 
    apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. 
    Then, using string interpolation, console.log either 
    'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
 
*/
let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd'];

let fruits = ['apple', 'blueberry', 'peach', 'cherry']

for (let pie of pies){
    let fruitPie = false;
    for (let fruit of fruits){
        if (pie.includes(fruit)){
            fruitPie = true; 
        }
    }
    if (fruitPie){
        console.log(`${pie} is a fruit pie!`)
    } else {
        console.log(`${pie} is not a fruit pie!`) 
    }
}

// Switch Case 
let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd'];

for (let pie of pies){
    let fruitPie = false;
    switch(true){
        case (pie.includes('apple')):
            console.log(`${pie} is a fruit pie!`);
            break;
        
        case (pie.includes('peach')):
            console.log(`${pie} is a fruit pie!`);
            break;
        
        case (pie.includes('cherry')):
            console.log(`${pie} is a fruit pie!`);
            break;
        
        case (pie.includes('blueberry')):
            console.log(`${pie} is a fruit pie!`);
            break;
        default:
            console.log(`${pie} is a not fruit pie!`)
    }
}

// Switch Case with Boolean
let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd'];

for (let pie of pies){
    let fruitPie = false;
    switch(true){
        case (pie.includes('apple')):
            fruitPie = true;
            break;
        
        case (pie.includes('peach')):
            fruitPie = true;
            break;
        
        case (pie.includes('cherry')):
            fruitPie = true;
            break;
        
        case (pie.includes('blueberry')):
            fruitPie = true;
            break;
        default:
            break;
    }
    (fruitPie) ? console.log(`${pie} is a fruit pie!`) : console.log(`${pie} is a not fruit pie!`);
}
    


// Class solution
let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd'];

for (let pie of pies){
    if(pie.includes('apple') || pie.includes('blueberry') || pie.includes('cherry') || pie.includes('peach')){
        console.log(`${pie} is a fruit pie!`);
    } else {
        console.log(`${pie} is not a fruit pie!`);  
    }
}

/*
    Platinum:
    In the same console.log of Gold challenge, add an index of the fruit pie to be displayed. The output should look like this: 'the  __ pie at __ index is a fruit pie!' or 'the __ pie at __ index is not a fruit pie :('. While you are at it, make the first letter of the fruit pie into upper case.
​
    - Use google to search for an array method that checks indices of an array
*/

// ***** Still need to capitalize the first letter! ***** //
let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd'];
let fruits = ['apple', 'blueberry', 'peach', 'cherry'];

for (let pie of pies){
    let pieIndex = (pies.indexOf(pie));

    let fruitPie = false;
    for (let fruit of fruits){
        if (pie.includes(fruit)){
            fruitPie = true; 
        }
    }
    if (fruitPie){
        console.log(`The ${pie} pie at ${pieIndex} index is a fruit pie!`)
    } else {
        console.log(`The ${pie} pie at ${pieIndex} index is not a fruit pie!`) 
    }
};

// Class solution
let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd'];

for (let pie of pies){
    if(pie.includes('apple') || pie.includes('blueberry') || pie.includes('cherry') || pie.includes('peach')){
        console.log(`${pie[0].toUpperCase()}${pie.slice(1)} at ${pies.indexOf(pie)} is a fruit pie!`);
    } else {
        console.log(`${pie[0].toUpperCase()}${pie.slice(1)} at ${pies.indexOf(pie)} is not a fruit pie!`);
    }
}


