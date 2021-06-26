//Create a loop that will loop (forEach) through an array of words that will determine if a word is 
//spelled the same forward as it does backward.

https://www.programiz.com/javascript/examples/palindrome

// The following code is a mess! See the bottom for correct solution.
​
// let wordArray = ['radar', 'john', 'racecar', 'trail', 'madam'];

// for (let item in wordArray){
//     for (let i=0; i<wordArray[item].length/2; i++){
//         // console.log(`wordArray[item[i]]: ${wordArray[item[i]]}`);
//         console.log(`wordArray[item]: ${wordArray[item]}`);
//         // console.log(`item[i]: ${item[i]}`);
//         console.log(`((wordArray[item])[item[i]]): ${((wordArray[item])[item[i]])}`)
        
//         console.log(`(wordArray[item].length-1)-i: ${(wordArray[item].length-1)-i}`);
//         console.log(`(wordArray[item])[(wordArray[item].length-1)-i]: ${(wordArray[item])[(wordArray[item].length-1)-i]}`);
//         // if (wordArray[item[i]] !== ((wordArray[item])[((wordArray[item]).length -1) -i])) {
//         if (((wordArray[item])[item[i]]) !== (wordArray[item])[(wordArray[item].length-1)-i]) {
//                 console.log(`${wordArray[item]} is not a palindrome.`);
//                 break;
//         }
//     }
//     console.log(`${wordArray[item]} is a palindrome.`);
// }

let wordArray = ['radar', 'john', 'racecar', 'trail', 'madam'];

wordArray.forEach(word => {
    let rev = word.split("").reverse().join("");
    if (word === rev){
        console.log(`${word} is a pallindrome`);
    } else {
        console.log(`${word} is not a pallindrome`);
    }
})
