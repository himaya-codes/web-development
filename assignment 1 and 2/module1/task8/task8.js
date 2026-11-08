const startYear = parseInt(prompt('Enter the start year:'), 10);
const endYear = parseInt(prompt('Enter the end year:'), 10);

const listElement = document.querySelector('#leapYearsList');

let htmlContent = '';

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        htmlContent += `<li>${year}</li>`;
    }
}

listElement.innerHTML = htmlContent;