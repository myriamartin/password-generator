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
let passwordLength = 0;
let includeLowercase = false;
let includeUppercase = false;
let includeNumeric = false;
let includeSpecial = false;

// Function to prompt user for password
function getPasswordOptions() {
  // Prompt to confirm how many characters the user would like in their password
  let passwordLength = prompt(
    "How many characters between 10-64 would you like your password to contain?"
  );

  // Loop if answer is outside the parameters
  if (passwordLength < 10 || passwordLength > 64) {
    alert(
      "Password does not meet specified length requirement, please try again."
    );
    // User inputs password length again
    let passwordLength = prompt(
      "How many characters between 10-64 would you like your password to contain?"
    );
  }
  // Return back the total characters the password will have
  alert(`Your password will have ${passwordLength} characters.`);

  //window.confirm for user to select password criteria with  boolean response for each option and variable declared to store input
  let includeLowercase = confirm(
    "1/4\nWould you like to use LOWERCASE characters?\nIf YES press ok, if NO press cancel.\nRemember that at least one type of character should be selected."
  );
  let includeUppercase = confirm(
    "2/4\nWould you like to use UPPERCASE characters?\nIf YES press ok, if NO press cancel.\nRemember that at least one type of character should be selected."
  );
  let includeNumeric = confirm(
    "3/4\nWould you like to use NUMERIC characters?\nIf YES press ok if, NO press cancel.\nRemember that at least one type of character should be selected."
  );
  let includeSpecial = confirm(
    "4/4\nWould you like to use SPECIAL characters characters?\nIf YES press ok, if NO press cancel.\nRemember that at least one type of character should be selected."
  );

  // Loop if the users's input is outside the parameters
  if (
    includeLowercase === false &&
    includeUppercase === false &&
    includeNumeric === false &&
    includeSpecial === false
  ) {
    alert("Remember that at least one type of character should be selected.");

    let includeLowercase = confirm(
      "Would you like to use LOWERCASE characters?\nIf yes press ok if no press cancel.\nRemember that at least one type of character should be selected."
    );
    let includeUppercase = confirm(
      "Would you like to use UPPERCASE characters?\nIf yes press ok if no press cancel.\nRemember that at least one type of character should be selected."
    );
    let includeNumeric = confirm(
      "Would you like to use NUMERIC characters?\nIf yes press ok if no press cancel.\nRemember that at least one type of character should be selected."
    );
    let includeSpecial = confirm(
      "Would you like to use SPECIAL characters characters?\nIf yes press ok if no press cancel.\nRemember that at least one type of character should be selected."
    );
  }

  // Return an object with the user's inputs.

  return {
    charactersLength: passwordLength,
    lowercase: includeLowercase,
    uppercase: includeUppercase,
    numeric: includeNumeric,
    special: includeSpecial,
  };
}

// Function for getting a random element from an array.
function getRandom(arr) {
  randomCharacter = arr[Math.floor(Math.random() * arr.length)];
  return randomCharacter;
}

// Function to generate password with user input.
function generatePassword() {
  let userInput = getPasswordOptions();
  // An empty array for the characters selected.
  let arr = [];

  if (userInput.lowercase) {
    arr = arr.concat(lowerCasedCharacters);
  }
  if (userInput.uppercase) {
    arr = arr.concat(upperCasedCharacters);
  }
  if (userInput.numeric) {
    arr = arr.concat(numericCharacters);
  }
  if (userInput.special) {
    arr = arr.concat(specialCharacters);
  }
  // An empty string for the passwords
  let password = "";
  for (let i = 0; i < userInput.charactersLength; i++) {
    password = password.concat(getRandom(arr));
  }
  return password;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
