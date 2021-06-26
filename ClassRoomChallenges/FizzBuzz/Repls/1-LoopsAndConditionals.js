
// let string = 'a string';
// let oddNum = 5;
// let evenNum = 6;
// let obj = {dog: 'Fritz', cat:'Fido'}; 

let callback = (userInput) => {
  let response;
  console.log(typeof userInput);
  if (typeof userInput === 'number') {
    //   switch(true){
    //     case (num %2 === 0):
    //       response = `the number is even`;
    //       break;
    //     default:
    //       response = `the number is odd`;
    //       break;
    //   };
    if (userInput % 2 === 0) {
      response = `the number ${userInput} is even`;
    } else if (userInput % 2 !== 0) {
      response = `the number ${userInput} is odd`;
    }
  } else {
    // response = `what is this?`;
    response = `what is ${userInput}`;

  };
  console.log(`response: ${response}`);
  return console.log(response);
}

// callback(string);
// callback(oddNum);
// callback(evenNum);
// callback(obj);

for (let i = 0; i <= 10; i++) {
  console.log(callback(i));
  // console.log(i);
  callback(i);
}

// // Please do not modify this!
// module.exports = callback;