myObject = {
    myStr: "Hi! I'm Bob!",
    myNum: 7,
    myBool: true,
    myObj: {
        favFood: "BBQ",
        favPers: "Maria",
        favColor: "Orange"
    }
};

let num = myObject.myNum;

// console.log(typeof(num));
// console.log(typeof myObject.myBool);
// console.log(typeof myObject.myStr);

let item = myObject.myBool;

if ((typeof item) == 'string' || 'number' || 'boolean' || 'object'){
    console.log(typeof item);
} else {
    console.log("What are you?");
}

