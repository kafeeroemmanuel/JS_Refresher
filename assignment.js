// 3 different ways of selecting that task

// const listItem = document.getElementById("task-1");
// listItem.style.backgroundColor = "black";
// listItem.style.color = "white";

//const liIt = document.querySelector("#task-1");
//liIt.style.color = "black";

const li = document.querySelector("li");
li.style.backgroundColor = "black";
li.style.color = "white";

const title = document.querySelector("title");
title.textContent = "Assignment Solved";

const h1 = document.querySelector("h1");
h1.textContent = "Assignment - solved";

//alternative to above gives a list of hs
const hOne = document.getElementsByTagName("h1");
hOne[0].textContent = "heading";
