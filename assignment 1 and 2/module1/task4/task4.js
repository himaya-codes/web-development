const studentName = prompt('Enter student name:');

const randomNum = Math.floor(Math.random() * 4) + 1;

let house = '';

// Multiple choice structure using a switch statement
switch (randomNum) {
    case 1:
        house = 'Gryffindor';
        break;
    case 2:
        house = 'Slytherin';
        break;
    case 3:
        house = 'Hufflepuff';
        break;
    case 4:
        house = 'Ravenclaw';
        break;
}

//pass and print the result 
document.querySelector('#result').textContent = `${studentName}, you are ${house}.`;