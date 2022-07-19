console.log("Object Prototypes");

// Object literal : starts from Object.prototype(); you can use object.prototype() and its properties
let obj = {
    name: "Mansi",
    age: 20
};
console.log(obj);

// What does [[Prototype]]: Object mean?

function OBJ(name) {
    this.name=name;
}
let obj2 =new OBJ("Mansi");

console.log(obj2);

// Here, obj2 has the prototype of OBJ

// You can make new prototypes with the  help of constructors

// Editing object prototype

OBJ.prototype.getName = function () {
    return this.name;
};


console.log(obj2.getName());

// Only edit your own objects, dont edit Objects made by object literals
