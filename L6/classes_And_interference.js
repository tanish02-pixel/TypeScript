"use strict";
//! BASIC CLASS -->
class Person {
    constructor(name, age) {
        //constructor for calling class properties
        this.name = name;
        this.age = age;
    }
    greet() {
        //function
        console.log(`Hey ${this.name}`);
    }
}
const p1 = new Person("Tanish", 20); //object bnaya..
p1.greet(); //object se function call..!
//! INHERITANCE -->
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age); // calls the base constructor
        this.rollNumber = rollNumber;
    }
    displayRoll() {
        console.log(`Roll number is ${this.rollNumber}`);
    }
}
const student1 = new Student("Riya", 20, 45);
student1.greet();
student1.displayRoll();
//! Override Methods and Properties -->
class Teacher extends Person {
    greet() {
        console.log(`Hi, I am teacher ${this.name}`);
    }
}
const teacher1 = new Teacher("Mr. Singh", 40);
teacher1.greet(); // Overridden version
//! Protected Modifier -->
class Employee {
    constructor(empId) {
        this.empId = empId;
    }
    showId() {
        console.log("Employee ID: " + this.empId);
    }
}
class Manager extends Employee {
    getEmpId() {
        console.log("Accessing Protected ID: " + this.empId); // Allowed
    }
}
const mgr = new Manager(101);
mgr.getEmpId();
// mgr.empId; ❌ Not allowed outside the class or its child
//! Getter & Setter
class Car {
    constructor() {
        this._brand = "";
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        if (value.length > 0) {
            this._brand = value;
        }
        else {
            throw new Error("Brand name can't be empty");
        }
    }
}
const car1 = new Car();
car1.brand = "Tesla";
console.log(car1.brand); // Tesla
//! Static Methods and Properties
class MathUtil {
    static square(x) {
        return x * x;
    }
}
MathUtil.PI = 3.14;
console.log(MathUtil.PI); // 3.14
console.log(MathUtil.square(5)); // 25
//! Abstract Classes
class Animal {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
const dog = new Dog();
dog.makeSound(); // Woof!
dog.move(); // Moving...
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle(5);
console.log(circle.area()); // 78.54
//! Read-Only Properties
class Book {
    constructor(title) {
        this.title = title;
    }
    showTitle() {
        console.log("Book: " + this.title);
    }
}
const myBook = new Book("TypeScript Basics");
// myBook.title = "New Title"; ❌ Error
myBook.showTitle();
const emp = {
    name: "Tanish",
    salary: 50000,
};
