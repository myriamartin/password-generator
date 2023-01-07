// Array of special characters to be included in password
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Variable Declaration
let newPassword = "";
let includeLength = "";
let includeSpecialCharacter;
let includeNumericCharacter;
let includeUpperCase;
let includeLowerCase;

// Function to prompt user for password
function getPasswordOptions() {
  // Prompt to confirm how many characters the user would like in their password
  let includeLength = prompt(
    "How many characters between 10-64 would you like your password to contain?"
  );

  // Loop if answer is outside the parameters
  while (includeLength <= 10 || includeLength >= 64) {
    alert(
      "Password does not meet specified length requirement, please try again"
    );
    // User enters password length again
    let includeLength = prompt(
      "How many characters between 10-64 would you like your password to contain?"
    );
  }
  // Return back the total characters the user will have
  alert(`Your password will have ${includeLength} characters`);

  // window.confirm for user to select password criteria with  boolean response for each option and variable declared to store input
  let includeLowercase = confirm(
    "Would you like to use LOWERCASE characters?\nIf yes press ok if no press cancel.\nRemember you should have at least one type of character"
  );
  let includeUppercase = confirm(
    "Would you like to use UPPERCASE characters?\nIf yes press ok if no press cancel.\nRemember you should have at least one type of character"
  );
  let includeNumeric = confirm(
    "Would you like to use NUMERIC characters?\nIf yes press ok if no press cancel.\nRemember you should have at least one type of character"
  );
  let includeSpecialCharacters = confirm(
    "Would you like to use SPECIAL characters characters?\nIf yes press ok if no press cancel.\nRemember you should have at least one type of character"
  );
  // Loop if answer is outside the parameters
  while (
    includeUpperCase === false &&
    includeLowerCase === false &&
    includeSpecialCharacter === false &&
    includeNumericCharacter === false
  ) {
    alert("You must choose at least one parameter");
    let includeLowercase = confirm(
      "Would you like to use LOWERCASE characters?\nIf yes press ok if no press cancel.\nRemember you should have at least one type of character"
    );
    let includeUppercase = confirm(
      "Would you like to use UPPERCASE characters?\nIf yes press ok if no press cancel.\nRemember you should have at least one type of character"
    );
    let includeNumeric = confirm(
      "Would you like to use NUMERIC characters?\nIf yes press ok if no press cancel.\nRemember you should have at least one type of character"
    );
    let includeSpecialCharacters = confirm(
      "Would you like to use SPECIAL characters characters?\nIf yes press ok if no press cancel.\nRemember you should have at least one type of character"
    );
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomChar = Math.floor(Math.random() * specialCharacters.length);
}

// Function to generate password with user input
function generatePassword() {
  let newPassword = "";
  for (let i = 0; i < 100; i++) {
    newPassword += "j";
  }

  return newPassword;
}

// Get references to the #generate element
////Assignment Code + Event Listener to prompt questions when button pushed
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
