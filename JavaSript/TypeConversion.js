console.log("Type Conversion and coercion");

let myvar;
// Integer to String
myvar= String(34);
console.log(myvar,typeof(myvar));

let booleanVar = true;
console.log(booleanVar,typeof(booleanVar));
// Conversion from boolean to String
booleanVar=String(booleanVar);
console.log(booleanVar,typeof(booleanVar));

let date=new Date();
console.log(date, typeof(date));

date=String(new Date());
console.log(date, typeof(date));

let arr= [1,2,3,4,5];
console.log(arr, typeof(arr));

arr= String([1,2,3,4,5]);
console.log(arr, typeof(arr));

console.log(arr.length);
// Its takingthe commas into consideration since its a string now

// toString() method 

let i=true;
i=i.toString();
console.log(i,typeof(i));

let str= "3434";
console.log(str, typeof(str));

// To convert to number
// Incase its not possible, it displays "NaN: Not a number"

str=Number(str);
console.log(str, typeof(str));

str=Number(true);
// This will be considered as one, not an error, and false will print 0
console.log(str, typeof(str));

// If you try to convert an array or string or something that could have an issue..it displays "nan: Not a number"


let number='34';
console.log(number, typeof(number));

// if you want it to be an integer use parse int

number= parseInt('34');
console.log(number, typeof(number));

// Similarly parseFloat also exists


// toFixed()
let x=45;
console.log(x.toFixed(3));

// toFixed(n) gives the number upto n decimal places

// Type Coercion

let myStr='698';
let myNum= 34;

console.log(myStr + myNum);
// Two options, either convert String to number and add OR convert number to String and concatenate
// It takes the second one into consideration, i.e it converts a number into String and then concatenates

// To implement the first option "Type Coercion"
myStr=Number('698');
myNum= 34;
console.log(myStr + myNum);



