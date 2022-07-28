console.log("Promises");

/*

i. Promise can be resolved
ii. Promise can be rejected
iii. Promise can be pending

*/

// function func1() {
//     // Returning an object of Promise, it takes in a function as a parameter
//     return new Promise(function (resolve,reject) {
//         setTimeout(() => {
//             const error=true;
//             if(!error){
//                 console.log("Function: You promise has been resolved");
//                 resolve();
//             }
//             else{
//                 console.log("Function: YOur promise has not been resolved");
//                 reject('Function: Sorry,not fulfilled');
//             }
//         }, 2000);
//     })
// }

// // .then-->if resolved what are we gonna do

// func1().then(function () {
//     console.log("Mansi:Thanks for resolving")
// }).catch(function (error) {
//     console.log(error+" Mansi: No Problem, next time");
// })

// Why do we use promises?
// It can be used as a substitute to our call backs


// Converting our callbacks code to promises

console.log("Call backs converted to Promises");


// Pretend that this response is coming from the server
const students = [
    {name: "mansi",subject:"JavaSCript"},
    {name: "rashi",subject:"Hotel management"}
]

// callback function is a function inside a function

// setTimeout: i will perform my work in the background after 8000ms
// setTimeout is a call back function too

// function enrollStudent(student) {
//     setTimeout(function()  {
//         students.push(student);
//     }, 8000);
// }

// function getStudents() {
//     let str="";
//     setTimeout(function()  {   
//         students.forEach(function (student) {
//             str+=`<li>${student.name}</li>`
//         });
//         document.getElementById('students_list').innerHTML = str;
//     }, 1000);
// }

// let newStudent = {name:"Sunny",subject:"python"};
// enrollStudent(newStudent);

// getStudents();

// while student is enrolling, because get students is faster it will populate the first two even before enrolling the student

// forEach is synchronous

// how to fix this

function enrollStudent(student) {

    return new Promise(function (resolve,reject) {
        setTimeout(function()  {
            let error = false;
            students.push(student);
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        }, 3000);
    })
}

function getStudents() {
    let str="";
    setTimeout(function()  {   
        students.forEach(function (student) {
            str+=`<li>${student.name}</li>`
        });
        document.getElementById('students_list').innerHTML = str;
    }, 1000);
}

let newStudent = {name:"Sunny",subject:"python"};
enrollStudent(newStudent).then(function () {
    getStudents();
}).catch(function () {
    console.log("Some error occured");
})

// function inside .then: resolve()
// function inside .catch: reject()
