console.log("Variables in JavaScript");

// Variables

// Keywords used to declare variables
// i. var
// ii. let
// iii. const

var name1="Mansi";
// if you want quotes to be a part of your string, you can enclose the string within backticks or single quotes. Similarly if you want single quotes to be a part use backticks or double quotes to enclose the string.And the same goes for backticks too
var names='"Good" `itseems`'
console.log(name1);
console.log(names);

var age;
console.log(name1,age);
// Since we have not initialised age, it displays "undefined"

age=19;
console.log(name1,age);
// Now that we've assigned a value..the value gets printed


// Rules for creating variables


// i. Cannot start with numbers
// ii. Can start with letters, _ or $
// iii. Variable names are case sensitive

var city="Bangalore";

// But avoid using underscore or $

// Ever since modern JavaScript was introduced the use of "var" has been reduced

// const and let increase code readability

const pi= 3.14;
console.log(pi);

// pi=pi+1;
// If you try to execute the above line you'll get an error , you cannot change the initialised value of const

// Benefits of const 
// sometimes you dont want  to ever change certain variable values
// you cant only "declare" a const variable, you have to initialise it with some value

// What is let?
// let has a block level scope whereas var has a global scope

{
    // let has only thismuch scope
}

{
    let city="Bengaluru";
    console.log(city);
    // since it is inside this block it will display the value of city inside this block
}

console.log(city);
// since it is outside the block the value of city inside the block wont get displayed, "Bangalore" will be displayed (line 32)

const arr1 = [12,22,32,42,52,62];
arr1.push(100);
// to add element at the end of the array
console.log(arr1);

/* 
Most common programming case types

i. CamelCase :first letter of every word capital
ii. Kebab-Case : dashed
iii. Snake_Case: underscored
iv. Pascalcase: Only first letter capital

*/

// let for clean code
