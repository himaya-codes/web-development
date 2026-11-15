"use strict";

console.dir(window);

function timedAction(){
    console.log("Timed !!");

    let boxDiv = document.querySelector(".box");
}

let timerId = setInterval(timedAction, 2000);

let main_heading = document.querySelector("#h1");
console.log(main_heading);

let main_heading_text = document.getElementById("main-heading");
console.log(main_heading_text);

let paras = document.querySelectorAll("p");
console.log(paras);

let paras_text = document.getElementsByTagName("p");
console.log(paras_text);