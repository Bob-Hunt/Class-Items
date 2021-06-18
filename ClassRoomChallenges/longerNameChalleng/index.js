let myName = "Robert";
let friendName = "Brian";

console.log(myName.length);
console.log(friendName.length);

if (myName.length > friendName.length){
    console.log(`${myName} is longer than ${friendName}'s.`);
} else if (myName.length < friendName.length){
    console.log(`${friendName} is longer than ${myName}'s.`);
} else {
    console.log(`${myName} and ${friendName} are the same length!`);
}

if (myName.length > friendName.length){
    console.log(`${myName} is ${myName.length - friendName.length} letters longer than ${friendName}'s.`);
} else if (myName.length < friendName.length){
    console.log(`${friendName} is ${friendName.length - myName.length} letters longer than ${myName}'s.`);
} else {
    console.log(`${myName} and ${friendName} are the same length!`);
}