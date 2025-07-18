// Declare variables
let userInput: unknown;
let userName: string;
let passWord: any;

// Assign values
userInput = 10;
userName = "Tanish";
passWord = "cjcad#cdnv";

// Example with 'any' type (DANGEROUS - no type check)
console.log("Password Length (any):", passWord.length); // ✅ Works, but unsafe

passWord = 123;
console.log("Password + 10 (any):", passWord + 10); // ✅ Works, but might cause bugs

// Example with 'unknown' type (SAFE - must check)
if (typeof userInput === "string") {
  console.log("User input in uppercase (unknown):", userInput.toUpperCase());
} else if (typeof userInput === "number") {
  console.log("User input doubled (unknown):", userInput * 2);
} else {
  console.log("Unknown type of userInput");
}

// Example with 'string' type (strict)
console.log("Username in uppercase (string):", userName.toUpperCase()); // ✅ Safe and allowed
