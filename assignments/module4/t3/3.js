'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.querySelector('#target');

let htmlContent = '';
for (let i = 0; i < names.length; i++) {
  htmlContent += `<li>${names[i]}</li>`;
}

target.innerHTML = htmlContent;