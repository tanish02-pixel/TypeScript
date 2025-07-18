function add(num1, num2, printResult, someText) {
    var result = num1 + num2;
    if (printResult) {
        // Print the result with the provided text
        console.log("".concat(someText, " ").concat(result));
        return; // or return undefined
    }
    else {
        // Return the result without printing
        return result;
    }
}
// Example usage of the add function
var n1 = 20;
var n2 = 100;
var printResult = true;
var someText = "Sum of Two Number Is =";
// Call the add function with the above values
var ans = add(n1, n2, printResult, someText);
