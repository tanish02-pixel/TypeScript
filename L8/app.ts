//! Generics intro  --> Instead of fixing the type, you use a placeholder like <T> that gets replaced when you use the function or class .

type Person = {
  name: string;
  age: number;
};

const Boy: Person = {
  name: "Shiva",
  age: 18,
};

const fruits: Array<Person> = [{ name: "Vivek", age: 12 }];

// The below lines are commented out because fruits array only accepts Person type objects

// fruits.push("Mango");

// fruits.push("Banana");

// fruits.push("Apple");

// console.log(fruits);

// eg2: Function to merge three objects of any types using generics

function merge<T, U, V>(objA: T, objB: U, objC: V) {
  return { ...objA, ...objB, ...objC };
}

const res = merge(
  { name: "patel" },
  { role: "Software engineer" },
  { id: "d1" }
);

// console.log(res);

// 2. Generics Constraints: Function with generic type constraints

function createObject<T extends string, U extends number, V extends boolean>(
  key: T,
  value: U,
  isActive: V
): { key: T; value: U; isActive: V } {
  return { key, value, isActive };
}

const obj = createObject("age", 25, true);

// console.log(obj);

//3. Generic Interface: Interface with generic type

interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 200 };
const stringBox: Box<string> = { value: "Dummy" };

// const stringBox2 : Box<object> = {value : {name:"Patel"}}

// console.log(numberBox);

// console.log(stringBox);

// Generic Default: Interface with default generic type

interface User<T = string> {
  data: T;
  status: number;
}

type Person2 = {
  name: string;
  age: number;
};

const response: User = { data: "Success", status: 200 }; // Default to string

const jsonRes: User<Person2> = {
  data: { name: "value", age: 21 },
  status: 200,
};

// console.log(response);

// console.log(jsonRes);

// 4. Generics with class: Class using generics

class Container<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

const stringContainer = new Container<string>("Hello");

// console.log(stringContainer.getContent());

const numberContainer = new Container<number>(100);

// console.log(numberContainer.getContent());

// Generic with Array: Function to get first element of an array of any type

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirst([1, 2, 3, 4]);
const firstString = getFirst(["a", "b", "c"]);
console.log(firstNumber);
console.log(firstString);

// Generic with keyof

// const Person = {key:"Mernstack"}

// console.log(Person["key"]);

// function getProperty(obj : object, key : string){

//     return obj[key]

// }

// const res1 = getProperty({}, "name");

// console.log(res1);

// Function to get property value of an object using generics and keyof

function getProperty<T extends object, K extends keyof T>(
  obj: T,

  key: K
): T[K] {
  return obj[key];
}

const person = { name: "Tanish Singh", age: 21 };

// const person2 = {fullname:"Patel", salary:21};

const name1 = getProperty(person, "name");

// const age = getProperty(person2, "age");

console.log(name1);
