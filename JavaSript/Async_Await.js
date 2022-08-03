console.log("Async/Await");

// response.js returns a promise


//  by adding a keyword "async" to the function it would return a promise
async function mansi() {

    console.log("Inside Mansi function");
    // here we can wait for another promise to be solved
    
    // awaiting for another promise
    // the minute it sees await..it says okay i'll finish everything else and come, however, await keeps running
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await response.json();
    console.log("users resolved");
    return users;

}
// the value that has been returned from an async function needs a .then();

console.log("Before calling Mansi");
let result = mansi();
console.log("After calling Mansi");
console.log(result);
result.then(data=>console.log(data));
console.log("Last Line of the js file");