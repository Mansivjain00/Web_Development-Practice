console.log("ES6 Classes");

// Class is  blueprint, template

class Employee{

    constructor (name, experience, role){
        this.name = name;
        this.experience = experience;
        this.role = role;
    } 

    slogan(){
        return `I am ${this.name}! My company is the best`;
    }
    
    joining_year(){
        return 2022-this.experience;
    }

    // static methods
    // I didn't have to use name, experience and role here
    // which means i can use this method without even creating an object
    // function that can be used without creating an object
    static add(a,b){
        return a+b;
    }
};

// constructor is called at the time of object creation

let mansi = new Employee("Mansi",4,"Software Developer");

console.log(mansi);

// Advantages of ES6 Classes
// i. inheritance
// ii. easy to use

console.log(mansi.slogan());
console.log("Joining year:" + mansi.joining_year());

// static method used without creating an object
console.log(Employee.add(23,34));

// Marketing : inheriting from Employee

// Inheritance

class Marketing extends Employee{

    constructor(name,experience,role,serves){
        super(name,experience,role);
        this.serves = serves;
    }

    favourite_task(){
        if(this.serves == 'client'){
            return  'client';
        }
        else{
            return 'backend';
        }
    }

    static multiply(a,b){
        return a*b;
    }
}

let rohan = new Marketing("Rohan",5,"Marketing Intern", "backend");

console.log(rohan);

console.log(rohan.favourite_task());
// Anybody can use thus
console.log(Marketing.multiply(4,5));

// Accessing the superclass methhods
console.log(rohan.slogan());

// All the functions inside the class go into prototype