// refer to button div in html
var generateBtn = document.querySelector("#generate");
//different subsets of all the characters that can be put in a password
var lowerChar = "abcdefghijklmnopqrstuvwxyz".split("");
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberChar = "123456789".split("");
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var allChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var lowerUpperNumberChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789".split("");
var lowerUpperSpecialChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var lowerNumberSpecialChar = "abcdefghijklmnopqrstuvwxyz123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var upperNumberSpecialChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var lowerUpperChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerNumberChar = "abcdefghijklmnopqrstuvwxyz123456789".split("");
var lowerSpecialChar = "abcdefghijklmnopqrstuvwxyz !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var upperNumberChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789".split("");
var upperSpecialChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var numberSpecialChar = "123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

//get a random lowercase character
var randomLower = lowerChar[Math.floor(Math.random() * lowerChar.length)];
//get a random uppercase character
var randomUpper = upperChar[Math.floor(Math.random() * upperChar.length)];
//get a random numeric character
var randomNumber = numberChar[Math.floor(Math.random() * numberChar.length)];
//get a random numeric character
var randomSpecial = specialChar[Math.floor(Math.random() * specialChar.length)];

// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword();

  function generatePassword() {
    // Ask user to choose length of their password
    var passwordLength = window.prompt("Choose the length of your password (at least 8 characters and no more than 128 characters):");
    // If user input a number that does not meet the requirement, gives a reminder and let the user input again
    if ((passwordLength < 8) || (passwordLength > 128)) {
      window.alert("Please input a number that is at least 8 and not larger than 128.");
      passwordLength = window.prompt("Choose the length of your password (at least 8 characters and no more than 128 characters):");
    };
    // Ask user to confirm whether or not to include lowercase
    var lowercase = window.confirm("Do you want to include lowercase character?");
    // Ask user to confirm whether or not to include uppercase
    var uppercase = window.confirm("Do you want to include uppercase character?");
    // Ask user to confirm whether or not to include number
    var number = window.confirm("Do you want to include numeric character?");
    // Ask user to confirm whether or not to include special character
    var special = window.confirm("Do you want to include special character?");

    // Random characters other than those that must appear at least once in a password
    var partOfPassword = "";

    if (lowercase && uppercase && number && special) {
      //get the other random characters
      for (var i = 1; i <= (passwordLength - 4); i++) {
        partOfPassword += allChar[Math.floor(Math.random() * allChar.length)];
       };
       //concat characters that should appear at least once with the above random characters, then generate the password
      var password = randomLower + randomUpper + randomNumber + randomSpecial + partOfPassword;
      return password;
    } else if (lowercase && uppercase && number) {
      for (var i = 1; i <= (passwordLength - 3); i++) {
        partOfPassword += lowerUpperNumberChar[Math.floor(Math.random() * lowerUpperNumberChar.length)];
       };
      var password = randomLower + randomUpper + randomNumber + partOfPassword;
      return password;
    } else if (lowercase && uppercase && special) {
      for (var i = 1; i <= (passwordLength - 3); i++) {
        partOfPassword += lowerUpperSpecialChar[Math.floor(Math.random() * lowerUpperSpecialChar.length)];
       };
      var password = randomLower + randomNumber + randomSpecial + partOfPassword;
      return password;
    } else if (lowercase && number && special) {
      for (var i = 1; i <= (passwordLength - 3); i++) {
        partOfPassword += lowerNumberSpecialChar[Math.floor(Math.random() * lowerNumberSpecialChar.length)];
       };
      var password = randomLower + randomNumber + randomSpecial + partOfPassword;
      return password;
    } else if (uppercase && number && special) {
      for (var i = 1; i <= (passwordLength - 3); i++) {
        partOfPassword += upperNumberSpecialChar[Math.floor(Math.random() * upperNumberSpecialChar.length)];
       };
      var password = randomUpper + randomNumber + randomSpecial + partOfPassword;
      return password;
    } else if (lowercase && uppercase) {
      for (var i = 1; i <= (passwordLength - 2); i++) {
        partOfPassword += lowerUpperChar[Math.floor(Math.random() * lowerUpperChar.length)];
       };
      var password = randomLower + randomUpper + randomSpecial + partOfPassword;
      return password;
    } else if (lowercase && number) {
      for (var i = 1; i <= (passwordLength - 2); i++) {
        partOfPassword += lowerNumberChar[Math.floor(Math.random() * lowerNumberChar.length)];
       };
      var password = randomLower + randomNumber + partOfPassword;
      return password;
    } else if (lowercase && special) {
      for (var i = 1; i <= (passwordLength - 2); i++) {
        partOfPassword += lowerSpecialChar[Math.floor(Math.random() * lowerSpecialChar.length)];
       };
      var password = randomLower + randomSpecial + partOfPassword;
      return password;
    } else if (uppercase && number) {
      for (var i = 1; i <= (passwordLength - 2); i++) {
        partOfPassword += upperNumberChar[Math.floor(Math.random() * upperNumberChar.length)];
       };
      var password = randomUpper + randomNumber + partOfPassword;
      return password;
    } else if (uppercase && special) {
      for (var i = 1; i <= (passwordLength - 2); i++) {
        partOfPassword += upperSpecialChar[Math.floor(Math.random() * upperSpecialChar.length)];
       };
      var password = randomUpper + randomSpecial + partOfPassword;
      return password;
    } else if (number && special) {
      for (var i = 1; i <= (passwordLength - 2); i++) {
        partOfPassword += numberSpecialChar[Math.floor(Math.random() * numberSpecialChar.length)];
       };
      var password = randomNumber + randomSpecial + partOfPassword;
      return password;
    } else if (uppercase) {
      for (var i = 1; i <= (passwordLength - 1); i++) {
        partOfPassword += upperChar[Math.floor(Math.random() * upperChar.length)];
       };
      var password = randomUpper + partOfPassword;
      return password;
    } else if (lowercase) {
      for (var i = 1; i <= (passwordLength - 1); i++) {
        partOfPassword += lowerChar[Math.floor(Math.random() * lowerChar.length)];
       };
      var password = randomLower + partOfPassword;
      return password;
    } else if (number) {
      for (var i = 1; i <= (passwordLength - 1); i++) {
        partOfPassword += numberChar[Math.floor(Math.random() * numberChar.length)];
       };
      var password = randomNumber + partOfPassword;
      return password;
    } else if (special) {
      for (var i = 1; i <= (passwordLength - 1); i++) {
        partOfPassword += specialChar[Math.floor(Math.random() * specialChar.length)];
       };
      var password = randomSpecial + partOfPassword;
      return password;
      // if user selected none of the four character types, gives a reminder and let the user generate again
    } else {
      window.alert("At least one character type (lowercase, uppercase, numeric and special characters) should be selected.");
      return "Please click the red button to generate your password again."
    }
  };

  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
