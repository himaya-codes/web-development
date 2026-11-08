const numDice = parseInt(prompt('Input number of dice:'), 10);
const targetSum = parseInt(prompt('Input interest sum:'), 10);

const simulations = 10000;
let matchCount = 0;        

for (let i = 0; i < simulations; i++) {
    let currentSum = 0;
    
    for (let j = 0; j < numDice; j++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        currentSum += roll;
    }
    
    if (currentSum === targetSum) {
        matchCount++;
    }
}

const probability = (matchCount / simulations) * 100;

const message = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%`;
document.querySelector('#result').textContent = message;