// Primitive Data Types

let names = "Mansi";
console.log("My name is "+names);


console.log("Data type is "+typeof(names));

// typeof(): returns the type of String

let marks= 19;
// Will remain "number even if its of type float"
console.log("Data type is "+typeof(marks));

let isDriver=true;
console.log("Data type is "+typeof(isDriver));

let nullVar= null;
console.log("Data type is "+typeof(nullVar));
// It returns object but its NOT A REFERENCE DATA TYPE LIKE OTHER OBJECTS.
// Null is a primitive data type

let undef;
console.log("Data type is "+undef);

// Reference Data Types

let myarr=[1,2,3];
console.log("Data type is "+typeof(myarr));

let myarr1=[1,2,3,true,"Mansi"];
console.log("Data type is "+typeof(myarr1));

// No matter what your array has, it will always be of type object

// array can consist of any primitive data type

// JavaScript is Dynamically Typed Language , i.e you dont have to mention the type of data type used

// Object literals

let Student_marks = {
    Sonal: 100,
    Navi: 90,
    Rashi: 80,
    Mansi: 70,
}

console.table(Student_marks);
console.log(typeof(Student_marks));

// Functions

function findname() {
    
}
console.log(typeof(findname));

// Dates
let date=new Date();
console.log(typeof(date));
