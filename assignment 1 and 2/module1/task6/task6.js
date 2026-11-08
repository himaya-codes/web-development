// Display a confirmation window
const shouldCalculate = confirm("Should I calculate the square root?");

let message = "";

if (shouldCalculate) {
    const input = prompt("Enter a number:");
    const number = parseFloat(input);

    if (number < 0) {
        message = "The square root of a negative number is not defined.";
    } else {
        const result = Math.sqrt(number);
        message = `The square root of ${number} is ${result}.`;
    }
} else {
    message = "The square root is not calculated.";
}

document.querySelector("#result").textContent = message;