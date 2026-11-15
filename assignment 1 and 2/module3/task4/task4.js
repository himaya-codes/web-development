const numbers = [];
let num = Number(prompt("Enter a number (enter 0 to stop):"));

while (num !== 0) {
  numbers.push(num);
  num = Number(prompt("Enter a number (enter 0 to stop):"));
}

numbers.sort((a, b) => b - a);
console.log(numbers);