console.log("Prototype inheritance");

const proto = {
    slogan: function () {
        return "This company is the bestt";
    },
    changeName : function(name){
        this.name = name;
    }
}

const mansi = Object.create(proto);
mansi.name = "mansi";
mansi.role = "programmer";
console.log(mansi);

mansi.changeName("Mansi");
console.log(mansi);

// Alternate syntax

const obj2 = Object.create(proto , {
    name: {value: "Mansi" , writable: true},
    role: {value: "Student"},
});

// writable: true helps you edit


console.log(obj2);

// Prototype inheritance

// Employee constructor

function Employess(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan

Employess.prototype.slogan =  function () {
    return `This company is the bestt. Regards ${this.name}`;
};

let mansi2 = new Employess("Mansi",12345678,"4 years");
console.log(mansi2);

console.log(mansi2.slogan());

// lets say we have a marketing intern now, we need a different constructor, but he's still an employee

function Marketing(name,salary,experience,product) {
    Employess.call(this,name,salary,experience);
    this.product = product;
};

// Inherit prototype to be able to use rashi.slogan();
Marketing.prototype = Object.create(Employess.prototype);

// Manually set constructor
Marketing.prototype.constructor = Marketing;

let rashi = new Marketing("Rashi",12345678,"2 years", "Laptop");
console.log(rashi);
console.log(rashi.slogan());