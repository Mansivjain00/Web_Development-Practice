// Array is a collection of Data

// Array indexing starts from 0

console.log("Arrays tutorial");

let marks=[12 , 23 , 34 , 45 , 56 , 67 , 78 , 89 , 90];

let fruits=["apple","banana","orange"];

let mixed = ["Mansi",19,true,["Sophia High School","Vidya Niketan School","BMS College Of Engineering"]];

console.log(marks);
console.log(fruits);
console.log(mixed);

let arr= new Array(23,34,45);
console.log(arr);

// To print element at a given index
console.log(marks[5]);

// To return length of an array
// Length is a property
console.log(arr.length);

// Array.isArray(mixed) is a method that checks if mixed is a menthod or no
console.log(Array.isArray(mixed));

// To update array values
arr[0]="Mansi";
console.log(arr);

// To get index of an element
// returns -1 if element does not exist
console.log(marks.indexOf(34));

// Mutating an array
// To insert element at the end
marks.push(100);
console.log(marks);

// To insert at element at index 0
marks.unshift(01);
console.log(marks);

// To delete element from the end
let x=marks.pop();
console.log(x+" has been popped"+" and the updated array is\n "+marks);

// To delete element from the start
let y=marks.shift();
console.log(y+" has been removed"+" and the updated array is\n "+marks);

// Starting from index 2, 3 elements will be deleted using the function below

// marks.splice(m,n), starting from index m it removes n elements from m
marks.splice(2,3);
console.log(marks);

// Tp reverse the array
console.log(marks.reverse());


// ALSO KEEP IN MIND THAT A FEW METHODS ARE MUTATING THE ORIGINAL ARRAY

let marks2=[100,90,80,70];

// Althogh we concatenate, changes are not made to marks
marks.concat(marks2);
console.log(marks);

// Here, the changes are assigned to marks, hence marks gets updated
marks=marks.concat(marks2);
console.log(marks);

// Objects

let myObj ={
    // To have spaces in the keys(object variables as we understand)
    'first name1':"Mansi",
    age: 19,
    isAdult: true,
    education:["Sophia High School","Vidya Niketan School","BMS College Of Engineering"],
}

console.log(myObj);
// Two ways of accesing object properties
console.log(myObj.education);
console.log(myObj['first name1']);
