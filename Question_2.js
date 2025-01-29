var first = prompt("Enter your first name:");
var last = prompt("Enter your last name:");
var birth = Number(prompt("Enter your birth year:", "0"));

var currentYear = new Date().getFullYear();
var age = currentYear - birth;

var message = document.createElement("p");
message.id = "output";
message.textContent = `Hello ${first} ${last}! How does it feel to be ${age} years old?`;

document.body.appendChild(message);

var outputElement = document.getElementById("output");
