
const diceCount = parseInt(prompt('Enter the number of dice rolls:'), 10);
let sum = 0;

for (let i = 0; i < diceCount; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll; 
}

document.querySelector('#result').textContent = `The sum of ${diceCount} dice rolls is: ${sum}`;