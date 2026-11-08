const yearInput = prompt('Enter a year:');
const year = parseInt(yearInput, 10);

let message = '';

// Check leap year validity
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    message = `${year} is a leap year.`;
} else {
    message = `${year} is not a leap year.`;
}

// pass and Print the result
document.querySelector('#result').textContent = message;