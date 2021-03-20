// ---Arrays---

var specialChar = [ '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', , ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var num = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 


// --Prompt Length of password-- 
var passwordLength = 10

// --character preferences
  // upper and lower case letter
var characterSet = upperCase.concat(lowerCase)

// --implement generate password function
function generatePassword() {

  var password = '';

  for (var i = 0; i < passwordLength; i++) {
      var randomNum = getRandomInt(0, characterSet.length - 1)
       password = password + characterSet[randomNum];  
  }
  return password;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
