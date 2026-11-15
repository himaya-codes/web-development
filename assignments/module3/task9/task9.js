// even() function
function even(array) {
  const evenNumbers = [];
  
  for (const num of array) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  
  return evenNumbers;
}
const originalArray = [2, 7, 4, 15, 8, 9];
const evenArray = even(originalArray);

console.log("Original array:", originalArray);
console.log("Even numbers array:", evenArray);