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
// The Password generator will provide a password with 10-64  characters based on criteria the user specifies.
// Variable Declaration
let confirmLength = "";
let confirmSpecialCharacter;
let confirmNumericCharacter;
let confirmUpperCase;
let confirmLowerCase;

// Function to prompt user for password
function getPasswordOptions() {
  // Prompt to confirm how many characters the user would like in their password
  let confirmLength = prompt(
    "How many characters between 10-64 would you like your password to contain?"
  );

  // Loop if answer is outside the parameters
  while (confirmLength <= 10 || confirmLength >= 64) {
    alert("Password length must be between 10-64 characters. Try again");
    let confirmLength = prompt(
      "How many characters between 10-64 would you like your password to contain?"
    );
  }
  // Return back the total characters the user will have
  alert(`Your password will have ${confirmLength} characters`);

  // Determine parameters of password
  let userLowercase = confirm(
    "Would you like to use LOWERCASE characters?\nIf yes press ok if no press cancel.\nRemember you should have at least one type of character"
  );
  let userUppercase = confirm(
    "Would you like to use UPPERCASE characters?\nIf yes press ok if no press cancel.\nRemember you should have at least one type of character"
  );
  let userNumeric = confirm(
    "Would you like to use NUMERIC characters?\nIf yes press ok if no press cancel.\nRemember you should have at least one type of character"
  );
  let userSpecialCharacters = confirm(
    "Would you like to use SPECIAL characters characters?\nIf yes press ok if no press cancel.\nRemember you should have at least one type of character"
  );
  // Loop if answer is outside the parameters
  while (
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmSpecialCharacter === false &&
    confirmNumericCharacter === false
  ) {
    alert("You must choose at least one parameter");
    let userLowercase = confirm(
      "Would you like to use LOWERCASE characters?\nIf yes press ok if no press cancel\nRemember you should have at least one type of character"
    );
    let userUppercase = confirm(
      "Would you like to use UPPERCASE characters?\nIf yes press ok if no press cancel\nRemember you should have at least one type of character"
    );
    let userNumeric = confirm(
      "Would you like to use NUMERIC characters?\nIf yes press ok if no press cancel\nRemember you should have at least one type of character"
    );
    let userSpecialCharacters = confirm(
      "Would you like to use SPECIAL characters characters?\nIf yes press ok if no press cancel\nRemember you should have at least one type of character"
    );
  }
}
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  let randomChar = Math.floor(Math.random() * specialCharacters.length);
}

// Function to generate password with user input
function generatePassword() {
  let practicePassword = "";
  for (let i = 0; i < 100; i++) {
    practicePassword += "j";
  }

  return practicePassword;
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
