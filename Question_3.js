var nickname = prompt("Enter your nickname:");
var heightInInches = parseFloat(prompt("Enter your height (in inches)", "0"));
var weightInKg = parseFloat(prompt("Enter your weight (in kilograms)", "0"));

var weightInLbs = (weightInKg * 2.20462).toFixed(3);
var remainder = heightInInches % 12;
var heightInFeet = Math.floor(heightInInches / 12);

if (confirm("Do you agree to share your information with our site?")) {
   console.log("Name: " + nickname);
   console.log("Height: " + heightInFeet + "'" + remainder + "\"");
   console.log("Weight: " + weightInLbs + " lbs");
} else {
   console.log("User does not wish to share his/her information.");
}
