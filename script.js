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
let passwordLength;
let includeLowercase;
let includeUppercase;
let includeNumeric;
let includeSpecial;

// Function to prompt user for password
function getPasswordOptions() {
  // Prompt to confirm how many characters the user would like in their password
  let passwordLength = prompt(
    "How many characters between 10-64 would you like your password to contain?"
  );

  // Loop if answer is outside the parameters
  while (passwordLength < 10 || passwordLength > 64) {
    alert(
      "Password does not meet specified length requirement, please try again."
    );
    // User inputs password length again
    let passwordLength = prompt(
      "How many characters between 10-64 would you like your password to contain?"
    );
  }
  // Return back the total characters the password will have
  alert(`Your password will have ${passwordLength} characters`);

  //window.confirm for user to select password criteria with  boolean response for each option and variable declared to store input
  let includeLowercase = confirm(
    "Would you like to use LOWERCASE characters?\nIf YES press ok, if NO press cancel.\nRemember that at least one type of character should be selected."
  );
  let includeUppercase = confirm(
    "Would you like to use UPPERCASE characters?\nIf YES press ok, if NO press cancel.\nRemember that at least one type of character should be selected."
  );
  let includeNumeric = confirm(
    "Would you like to use NUMERIC characters?\nIf YES press ok if, NO press cancel.\nRemember that at least one type of character should be selected."
  );
  let includeSpecial = confirm(
    "Would you like to use SPECIAL characters characters?\nIf YES press ok, if NO press cancel.\nRemember that at least one type of character should be selected."
  );

  // Loop if the users's input is outside the parameters
  while (
    includeLowercase === false &&
    includeUppercase === false &&
    includeNumeric === false &&
    includeSpecial === false
  ) {
    alert("Remember that at least one type of character should be selected.");
    includeLowercase = confirm(
      "Would you like to use LOWERCASE characters?\nIf yes press ok if no press cancel.\nRemember that at least one type of character should be selected."
    );
    includeUppercase = confirm(
      "Would you like to use UPPERCASE characters?\nIf yes press ok if no press cancel.\nRemember that at least one type of character should be selected."
    );
    includeNumeric = confirm(
      "Would you like to use NUMERIC characters?\nIf yes press ok if no press cancel.\nRemember that at least one type of character should be selected."
    );
    includeSpecial = confirm(
      "Would you like to use SPECIAL characters characters?\nIf yes press ok if no press cancel.\nRemember that at least one type of character should be selected."
    );
  }

  // console.log(passwordLength);
  // console.log(includeLowercase);
  // console.log(includeUppercase);
  // console.log(includeNumeric);
  // console.log(includeSpecial);

  // Return an object with the user's inputs.
  return {
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumeric,
    includeSpecial,
  };
}

// Function for getting a random element from an array.
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
