console.log("Local Storage Vs Session Storage");

// Local Storage
// Setting items into the Local Storage(Key,Value Pair)
localStorage.setItem('Name','Mansi V Jain');
localStorage.setItem('Name2','Rashi V Jain');

console.log(window.localStorage);
// Its of type object
console.log(typeof window.localStorage);

// Retrieving items from the Local Storage
console.log(window.localStorage.Name);
console.log(window.localStorage.Name2);

// Alternative to retrieve items
console.log(localStorage.getItem('Name'));
console.log(localStorage.getItem('Name2'));

// if you try to retrieve an item that is not present in your local storage, it will return null

// To clear local storage
// localStorage.clear();
// console.log(window.localStorage);

// How to Remove only one item from the local storage
localStorage.removeItem('Name');
console.log(window.localStorage);

// You cannot add arrays directly

// How to overcome this problem
let arr=["fruits","vegetable","furniture"];
localStorage.setItem('essentials',arr);

// the above command will save it, however it will convert the entire array to a string and save it, on retrieval we will obtain the entire array as a string

// To store it in the form of an array use JSON.stringify
localStorage.setItem('essentials',JSON.stringify(arr));

// to access items from the array

// will not throw an error, it will print the array like a string
console.log(localStorage.getItem('essentials'));

// JSON.parse to print the items in the form of an array
let x=JSON.parse(localStorage.getItem('essentials'));
console.log(x);
console.log(typeof x);
console.log(x[1]);

// you can now use all array properties like push, forEach etc



// Session Storage
// Same functions like Local Storage

sessionStorage.setItem('sessionName','Mansi V Jain');
sessionStorage.setItem('sessionName2','Rashi V Jain');
sessionStorage.setItem('sessionessentials',JSON.stringify(arr));
console.log(window.sessionStorage);

// after closing the browser and commenting the above lines if you check session storage , it will be empty

// but local storage will remain, even if you comment it out and close and open the browser

// Local storage has no expiry date
// Session storage will clear once you close the browser 

// to clear session storage
sessionStorage.clear();
console.log(window.sessionStorage);
