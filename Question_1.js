var nickname = prompt("Enter your nickname:"); 
var heightInInches = parseFloat(prompt("Enter your height (in inches):", "0"));
var weightInKg = parseFloat(prompt("Enter your weight (in kilograms):", "0"));

var feet = Math.floor(heightInInches / 12);
var inches = heightInInches % 12;
var weightInLbs = (weightInKg * 2.20462).toFixed(3);

document.write("Name: " + nickname + "<br>");
document.write("Height: " + feet + "'" + inches + "''<br>");
document.write("Weight: " + weightInLbs + " lbs<br>");
