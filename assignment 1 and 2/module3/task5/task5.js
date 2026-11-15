const numbers = [];
let isDuplicate = false;

while (!isDuplicate) {
  const input = prompt("Enter a number:");
  
  const num = Number(input);

  if (!isNaN(num) && input !== null && input.trim() !== "") {
 if (numbers.includes(num)) {
      alert(`The number ${num} has already been given! Stopping operation.`);
      isDuplicate = true;
    } else {
      numbers.push(num);
    }
  }
}

//array in numerical ascending order
numbers.sort((a, b) => a - b);

console.log("All given numbers in ascending order:");
for (const n of numbers) {
  console.log(n);
}