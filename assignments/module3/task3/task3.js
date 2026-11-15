const dogs = [];

for (let i = 0; i < 6; i++) {
  const dogName = prompt(`Enter the name of dog ${i + 1} of 6:`);
  dogs.push(dogName);
}

dogs.sort();
dogs.reverse();

const list = document.getElementById("dog-list");
for (const dog of dogs) {
  list.innerHTML += `<li>${dog}</li>`;
}