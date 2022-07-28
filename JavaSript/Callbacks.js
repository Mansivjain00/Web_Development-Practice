console.log("Call backs");


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

function enrollStudent(student,callback) {
    setTimeout(function()  {
        students.push(student);
        callback();
    }, 3000);
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
enrollStudent(newStudent,getStudents);
