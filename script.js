// Assignment Code
var generateBtn = document.querySelector("#generate");
var capitolLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "!@#$%^&*"
// Write password to the #password input 
function writePassword() {  
  var answer1 = prompt("How long do you want your password to be? ");
  answer1 = parseInt(answer1);
  console.log(answer1);
  var answer2 = confirm("Would you like upper case letters?");
  var answer3 = confirm("Would you like lower case letters?");
  var answer4 = confirm("Would you like to use numbers?");
  var answer5 = confirm("Would you like to use symbols?");
  var password = generatePassword(response);
  var passwordText = document.querySelector("#password");


  var response = ""
    if (answer2) {
      response = response + capitolLetters;
    } if (answer3) {
      response = response + lowerLetters;
    } if (answer4) {
      response = response + numbers;
    } if (answer5) {
      response = response + symbols;
    } 
      //console.log(response)


  passwordText.value = password;

}
function generatePassword() {
  var response = Math.random()* reponse * legnth
  randomIndex = Math.floor(randomIndex);
  return response [randomIndex]
  };
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  //this needs to go after the website runes
  //alert("Password var goes here");

