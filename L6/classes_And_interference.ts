//! BASIC CLASS -->

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
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
  rollNumber: number;

  constructor(name: string, age: number, rollNumber: number) {
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
//protected members can be accessed inside the class and inside its child class, but not from outside of the class.
class Employee {
  protected empId: number;

  constructor(empId: number) {
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
  private _brand: string = "";

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    if (value.length > 0) {
      this._brand = value;
    } else {
      throw new Error("Brand name can't be empty");
    }
  }
}

const car1 = new Car();
car1.brand = "Tesla";
console.log(car1.brand); // Tesla

//! Static Methods and Properties

class MathUtil {
  static PI = 3.14;

  static square(x: number) {
    return x * x;
  }
}

console.log(MathUtil.PI); // 3.14
console.log(MathUtil.square(5)); // 25

//! Abstract Classes

abstract class Animal {
  abstract makeSound(): void;

  move(): void {
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
// const animal = new Animal(); ❌ Cannot create an instance of an abstract class

//! Interface
//An interface defines a structure or shape of an object.
//It says: "This object must have these properties or methods

interface IShape {
  area(): number;
}

class Circle implements IShape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.area()); // 78.54

//! Read-Only Properties
//A property that can be set once (in constructor), but can’t be changed later.
class Book {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }

  showTitle() {
    console.log("Book: " + this.title);
  }
}

const myBook = new Book("TypeScript Basics");
// myBook.title = "New Title"; ❌ Error
myBook.showTitle();

//!  Extending Interfaces
//Just like classes, one interface can inherit from another.
// Base interface
interface Personn {
  name: string;
}

// Extended interface
interface Employeee extends Personn {
  salary: number;
}

// This object must match both Person + Employee
const emp: Employeee = {
  name: "Tanish",
  salary: 50000,
};

console.log(emp.name); // Output: Tanish
console.log(emp.salary); // Output: 50000
