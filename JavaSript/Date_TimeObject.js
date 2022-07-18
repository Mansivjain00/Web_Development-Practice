console.log("Date and Time Object");

// Primitive date

let today = new Date();
console.log(today);
console.log(typeof today);

// Other date
// Month-date-year
let otherdate = new Date('8-4-2003 04:54:08');
console.log(otherdate);

let otherdate1 = new Date('June 13 1976');
console.log(otherdate1);

let otherdate2 = new Date('09/24/2001');
console.log(otherdate2);

// starting from sunday: 0 and so on...
console.log(otherdate.getDay());
 
// Starting from january: 0 and so on...
console.log(otherdate1.getMonth());

console.log(otherdate.getHours());
console.log(otherdate.getMinutes());
console.log(otherdate.getSeconds());

// Number of seconds since 1st Jan 1970 to the given date
console.log(otherdate.getTime());
console.log(today.getTime());

// to set date,month,year,etc manually
otherdate.setDate(24);
otherdate.setMonth(08);
otherdate.setFullYear(2001);
otherdate.setHours(09);
console.log(otherdate);