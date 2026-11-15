//parameterless function
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const list = document.getElementById("dice-list");
let roll = 0;

while (roll !== 6) {
  roll = rollDice();
  list.innerHTML += `<li>Rolled: ${roll}</li>`;
}