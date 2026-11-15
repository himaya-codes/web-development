'use strict';

const form = document.querySelector('#source');
const firstNameInput = document.querySelector('input[name="firstname"]');
const lastNameInput = document.querySelector('input[name="lastname"]');
const targetParagraph = document.querySelector('#target');


form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  targetParagraph.innerText = `Your name is ${firstName} ${lastName}`;
});