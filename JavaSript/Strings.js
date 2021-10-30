console.log("Strings");

const names="Mansi";
const greeting="Good Morning";

//String concatenation
console.log(greeting+" "+names);
let html="Good night ";
console.log(html);
html=html.concat(names);
console.log(html);

// String length
console.log(html.length);

// Case Conversion
console.log(html.toLowerCase());
console.log(html.toUpperCase());

// Even after converting value of "html" remains the same

console.log(html);

// To print character at 0th index
console.log(html[0]);

// to return the index at which "Mansi" starts
console.log(html.indexOf("Mansi"));

// Incase the substring doesnt exist it returns -1
console.log(html.indexOf("mmm"));

// to return the last index of i
console.log(html.lastIndexOf("i"));

// to extract character at ith index

let i=9;
console.log(html.charAt(i));

// to check if string endsWith a substring

console.log(html.endsWith("Mansi"));
console.log(html.endsWith("Man"));

// To check if a substring is present 

console.log(html.includes("Man"));

// To extract substring
console.log(html.substring(0,3));//returns characters on index 0,1 and 2

// html.substring(m,n), returns characters from m to n-1(including m and n-1)

// to return the whole string from a particular index

console.log(html.substring(10));

// Slice

// To return the last 4 characters
console.log(html.slice(-4));
// Works like substring
console.log(html.slice(0,6));

// With substring you cannot input negative values, if you do the whole string will be returned


// Split function

// Splits the string at every " " and returns an array that contains the parts of the Split string
console.log(html.split(" "));

// Replace function


// The function below replaces the first occurence
console.log(html.replace('Mansi','Rashi'));


// Template literals

// Generating html

let fruit1='\'Orange\'';
let fruit2='"Banana"';
let myhtml = `Hello ${names} 

<h1> This is Heading </h1>
<p> HELLO! Would you like to purchase an ${fruit1} or a ${fruit2} </p>
`;

document.body.innerHTML = myhtml;

