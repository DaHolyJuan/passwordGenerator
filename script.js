// Assignment Code
var generateBtn = document.querySelector("#generate");
var capitolLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "!@#$%^&*"


// Write password to the #password input 
function writePassword() {  
  var answer1 = prompt("Pick a number between 8 and 128 for password length");
  answer1 = parseInt(answer1);
  if (answer1  < 8 || answer1 > 128) {
    alert("You must choose a correct value please!");
    return;
  }

  var answer2 = confirm("Would you like upper case letters?");
  var answer3 = confirm("Would you like lower case letters?");
  var answer4 = confirm("Would you like to use numbers?");
  var answer5 = confirm("Would you like to use symbols?");
  var response = ""
    if (answer2) {
      response = response + capitolLetters;
    } 
    if (answer3) {
      response = response + lowerLetters;
    } 
    if (answer4) {
      response = response + numbers;
    } 
    if (answer5) {
      response = response + symbols;
    } 
      console.log(response)
  
  var password = generatePassword(answer1, response);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(answer1, response) {
  var random ="";
  for (i= 0; i < answer1; i++) {
  random = random + response[Math.floor(Math.random() * response.length)];
  }
  return random
};
  
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

