console.log("Math Object");

let x=3;
let y=6;
let z;

// Basic operations

console.log(z);
z=x+y;
console.log(z);
z=x-y;
console.log(z);
z=x*y;
console.log(z);
z=x/y;
console.log(z);

// Exploring the Math Object
z=Math;
console.log(Math);

// Constant values
console.log(Math.PI);
console.log(Math.E);

// Returns the next integer
console.log(Math.ceil(5.6));

// Rounding off of a number
console.log(Math.round(5.6));

// Returns the previous integer
console.log(Math.floor(5.6));

// Returns modulus/absolute value
console.log(Math.abs(-6.9));

// Returns the square root
console.log(Math.sqrt(9.0));

// (m,n) returns m to the power of n
console.log(Math.pow(2,3));

// Returns the minimum/maximum among the given values
console.log(Math.min(34,56,67,87));
console.log(Math.max(34,56,67,87));

// Random number generating between 0 to 1
console.log(Math.random());

// Random number between a given interval (m, n)=m+Math.random()*(n-m)
// Range of the example given below is (10,100)
// If you want an integer, use functions like Math.floor(),Math.ceil(), etc
console.log(10 + Math.random()*(100-10));