//! UNION , | --> Pipe in Typescript. (Union for storing value means string bhi hoskta h isme and number bhi..)
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
console.log(combine("Hello", 2)); // "Hello2"
console.log(combine(10, 5)); // 15
console.log(combine("Hi", " there")); // "Hi there"
// LITERAL TYPES
// TYPES ALIAS / SURTOM TYPES
