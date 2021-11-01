console.log("Loops tutorial");

// Loops repeat instructions till a condition is satisfied

// For Loops

for(let i=0;i<10;i++){
    console.log(i+1);
}

// for(initialisation ;condition ; updation/iteration)

// While loops

// while(condition)--> loop runs while the condition is true

let j=10;

while (j>=0) {
    console.log(j);
    j--;
}

// Do while loop

// Do while loop checks condition after performing the instructions once. Therefore, do while runs ATLEAST ONCE before checking the condition.

let k=1;
do {
    console.log("hey");
    k++;
} while (k==10);


// break --> comes out of the loop
// continue --> skips the steps below it and moves on to the next iteration of the loop

// forEach element  to iterate over arrays

let arr=[2,3,4,5,6];

arr.forEach(function (element,index,array) {
    console.log(element,index,array);
});

// To iterate over Objects

let obj={
    names : "Mansi V Jain",
    age : 20,
    gender : "female",
};

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}