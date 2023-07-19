// 2.4 Functions
// Reusable code
let arr = [1, 2, 3, 4];
// Built in function (Method)
arr.push(5);
// Syntax
// Declaration Syntax
// Function declaration syntax
function sum() {
  console.log(1 + 2);
}

// Arrow declaration syntax
const add = () => {
  console.log(2 + 3);
};

// Named Function declaration syntax
const minus = function () {
  console.log(3 - 1);
};

// Function Call Syntax
sum();
sum();
add();
add();
minus();

// Parameters/Arguments
// Function declaration with Params
function multiply(x, y) {
  console.log(x * y);
}

// Function call with Arguments
multiply(2);
multiply(3, 2);
// Example of bad code
// multiply("Steve", true);

// Return Statement
function divide(x, y) {
  let result = x / y;
  return result;
}

let response = divide(6, 3);
console.log(response);

function concatStr(str1, str2) {
  return str1 + str2;
}

console.log(concatStr("Andy ", "Bolton"));

// 2.5 JS DOM

// Part 1 - Elements

// Creating Elements
const firstH3Element = document.createElement("h3");
document.body.append(firstH3Element);
firstH3Element.innerText = "This was created in JS";

const div = document.createElement("div");
document.body.append(div);
div.innerHTML = `
    <h4>This is injected HTML</h4>
    <p>Lorem Ipsum</p>
`;
// Below is bad practice (Single line nonsense)
// document.body.append(
//   (document.createElement("div").innerHTML = `<h1>This is unreadable</h1>`)
// );

// Selecting Elements
const main1 = document.getElementById("main-element");
const bodyElements = document.getElementsByClassName("body-elements");
const pElements = document.getElementsByTagName("p");
const main2 = document.querySelector("#main-element");
const bodyElements2 = document.querySelectorAll(".body-elements");
console.log(main1);
console.log(bodyElements[0]);
console.log(pElements[1]);
console.log(main2);
console.log(bodyElements2[2]);

const p = document.createElement("p");
main2.append(p);
p.innerText = "Steve was here";

// Manipulating Elements
const header = document.querySelector("header");
const a = document.createElement("a");
a.href = "https://w3schools.com";
a.innerText = "W3Schools";
const li = document.createElement("li");
li.className = "list-items";
const ul = document.createElement("ul");
const nav = document.createElement("nav");
li.appendChild(a);
ul.appendChild(li);
nav.appendChild(ul);
header.appendChild(nav);

// Part 2 - Event Handling
// User changes something on page
// Event Attributes
function silly() {
  console.log("Silly!");
}

document.querySelector("footer").onclick = silly;

// Event Listeners

const bttnMain = document.querySelector("#bttn-main");
bttnMain.addEventListener("click", function () {
  console.log("Anon, You clicked the button");
});

// Input Handling
const input = document.querySelector("#input-main");
const bttnSubmit = document.querySelector("#bttn-submit");

let nameOutput = "";

input.addEventListener("change", function (event) {
  nameOutput = event.target.value;
  console.log(nameOutput);
});

bttnSubmit.addEventListener("click", function () {
  alert(`Hello ${nameOutput}`);
});
