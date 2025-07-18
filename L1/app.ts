
function add(num1: number, num2: number, printResult: boolean, someText: string){
  const result = num1 + num2;

  if (printResult) {
    // Print the result with the provided text
    console.log(`${someText} ${result}`);
    return; // or return undefined
  } else {
    // Return the result without printing
    return result;
  }
}

// Example usage of the add function
const n1 = 20;
const n2 = 100 ;
const printResult = true;
const someText = "Sum of Two Number Is =";

// Call the add function with the above values
const ans = add(n1, n2, printResult, someText);

