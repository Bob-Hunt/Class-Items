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

let item = myObject.myNum;

if ((typeof item) === 'string' || 'number' || 'boolean'){
    console.log(typeof item);
}

