console.log("Regular Expressions");

// To check if certain strings contain a substring we use regular expressions

// /mmm/==>regular expression literal
// let reg = /mansi/;

// g means global flag
let reg = /mansi/g;

// i means case insensitivity
// let reg = /mansi/i;

console.log(reg);
// content enclosed withing forward slashes can be retrieved using reg.source
console.log(reg.source);

let s = "This is great mansi!!That was also great mansi";
// Functions to match expressions

// 1.exec(): This will return an array for match and null for no match

// it shows the first occurence
// To get second occurence setup a flag 
let result = reg.exec(s);
console.log(result);

// after setting up global flag 'g' "let reg = /mansi/g;" , it would show the second occurence
result = reg.exec(s);
console.log(result);
// to print index and the input, cannot do this if result is null
if(result){
    console.log(result.index);
    console.log(result.input);
}


//2.test(): returns true reg exists in the string and false if it doesnt exist

result = reg.test(s);
console.log(result);

//3.match(): it will return an array of results or null
// ULTA
// returns an array where is matches
// array of results
result = s.match(reg);
console.log(result);

// 4.search() returns index of first match or -1
// ULTA again
result = s.search(reg);
console.log(result);

// 5. replace() returns a replaced string with all the replacements
// if theres no global flag ,all wont get replaced..only the first one will be replaced
result = s.replace(reg,'Rashi');
console.log(result);