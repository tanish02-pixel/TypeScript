//! UNION , | --> Pipe in Typescript. (Union for storing value means string bhi hoskta h isme and number bhi..)

function combine(num1: number | string, num2: number | string) {
  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }

  return result;
}

console.log(combine("Hello", 2)); // "Hello2"
console.log(combine(10, 5)); // 15
console.log(combine("Hi", " there")); // "Hi there"

//! LITERAL TYPES --> (FIXED ALLOWED VALUES)

function combine1(
  a: number | string,
  b: number | string,
  mode: "as-number" | "as-text" // ← literal type!
) {
  if (mode === "as-number") {
    return +a + +b; // add as numbers
  } else {
    return a.toString() + b.toString(); // join as text
  }
}

//! TYPES ALIAS / CUSTOM TYPES --> Giving a name to a type (even a complex one) so you can reuse it easily

type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Tanish",
  age: 21,
};

const user2: User = {
  name: "Aman",
  age: 22,
};
