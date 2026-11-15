const input = prompt('Enter an integer:');
const num = parseInt(input, 10);

let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

const resultElement = document.querySelector('#result');
if (isPrime) {
    resultElement.textContent = `${num} is a prime number.`;
} else {
    resultElement.textContent = `${num} is not a prime number.`;
}