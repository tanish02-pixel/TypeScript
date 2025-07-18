//! Generics intro  --> Instead of fixing the type, you use a placeholder like <T> that gets replaced when you use the function or class .
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Boy = {
    name: "Shiva",
    age: 18,
};
var fruits = [{ name: "Vivek", age: 12 }];
// The below lines are commented out because fruits array only accepts Person type objects
// fruits.push("Mango");
// fruits.push("Banana");
// fruits.push("Apple");
// console.log(fruits);
// eg2: Function to merge three objects of any types using generics
function merge(objA, objB, objC) {
    return __assign(__assign(__assign({}, objA), objB), objC);
}
var res = merge({ name: "patel" }, { role: "Software engineer" }, { id: "d1" });
// console.log(res);
// 2. Generics Constraints: Function with generic type constraints
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("age", 25, true);
var numberBox = { value: 200 };
var stringBox = { value: "Dummy" };
var response = { data: "Success", status: 200 }; // Default to string
var jsonRes = {
    data: { name: "value", age: 21 },
    status: 200,
};
// console.log(response);
// console.log(jsonRes);
// 4. Generics with class: Class using generics
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("Hello");
// console.log(stringContainer.getContent());
var numberContainer = new Container(100);
// console.log(numberContainer.getContent());
// Generic with Array: Function to get first element of an array of any type
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3, 4]);
var firstString = getFirst(["a", "b", "c"]);
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
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: "Tanish Singh", age: 21 };
// const person2 = {fullname:"Patel", salary:21};
var name1 = getProperty(person, "name");
// const age = getProperty(person2, "age");
console.log(name1);
