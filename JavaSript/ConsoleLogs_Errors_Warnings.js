console.log("hey");
// String


// When undefined gets displayed..it means the function has not returned anything

console.log(4+34);
console.log(34);
// Integers

// console.log means that log this information as it is

// We can log stuff like this

console.log([34,3,4,8]);
// array

console.log({name: "mansi", marks: 100});
// Object

console.table({name: "mansi", marks: 100});
// To display an object in tabular form

console.warn("This is a warning");
// warning

// console.clear();
// to clear all logs from display

// You should ideally always terminate the statements with a semi colon.
// But JavaScript is a forgiving language

// To log the amount of time your code takes to execute

// console.time('Variable kinda name')

console.time('Time taken');
console.log(5+5);
console.log(5-5);
console.log(5*5);
console.log(5/5);
console.timeEnd('Time taken');

// If you clear console just before ending time, it will throw an  error

// Lets say someone says their age is 189
console.assert(566<189, 'Age>189 is not possible');

// You can manually show error to
console.error("This is an error");

/*

************
*  this    *
*  is      *
*  a       *
*  multi   *
*  line    *
*  comment *
************

*/