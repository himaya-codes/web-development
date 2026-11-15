"use strict";

document.querySelector("#output").addEventListener("click", () => {
    const name = document.querySelector("#name").value;
    const grade = document.querySelector("#grade").value;
    const output = document.querySelector("#result");

    output.textContent = `Name: ${name}, Grade: ${grade}`;
});

document.querySelector("#qnt").addEventListener("click", () => {
    const price = document.querySelector("#price").value;
    const quantity = document.querySelector("#quantity").value;
    
    let total = quantity * price;
    let text = document.querySelector("#result2");
    text.textContent = `Total: ${total}`;
});