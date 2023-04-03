// Assignment code here
function generatePassword() {
    var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var possibleCharacters = [];


// Prompt the user to choose how long there password will be.
    passwordLength = prompt("How long would you like your password to be? Choose anywhere between 8 and 128 characters.")
// If statement making sure the user selects a password length between 8 and 128 characters.
    if (passwordLength < 8 || passwordLength > 128) {
        "Please choose a valid number of characters for your password.";
    } else {
        alert("Your password will be " + passwordLength + " characters long.");
    }
// Series of if statements that confirm what types of characters the user will want in their generated password.
    hasLowercase = confirm("Do you want lowercase characters?");
    if (hasLowercase) {
        alert("Your password will have lowercase characters.");
    } else {
        alert("Your password will not have lowercase characters.");
    }

    hasUppercase = confirm("Do you want uppercase characters?");
    if (hasUppercase) {
        alert("Your password will have uppercase characters.");
    } else {
        alert("Your password will not have uppercase characters.");
    }

    hasNumbers = confirm("Do you want number characters?");
    if (hasNumbers) {
        alert("Your password will have number characters.");
    } else {
        alert("Your password will not have number characters.");
    }

    hasSpecials = confirm("Do you want special characters?");
    if (hasSpecials) {
        alert("Your password will have special characters.");
    } else {
        alert("Your password will not have special characters.");
    }
// Series of if statments that concatonate character types to the possible outcome, based on what types the user has previously chosen.
    if (hasLowercase) {
        possibleCharacters = possibleCharacters.concat(lowercaseLetters);
    }
    if (hasUppercase) {
        possibleCharacters = possibleCharacters.concat(uppercaseLetters);
    }
    if (hasNumbers) {
        possibleCharacters = possibleCharacters.concat(numbers);
    }
    if (hasSpecials) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
    }
/*
 Final piece of code that puts the final password together by taking the possible character types they've chosen,
and adding a completely random one to each position(iteration) of the password length the user has chosen.
*/
    let outputPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = [Math.floor(Math.random() * possibleCharacters.length)];
        outputPassword = outputPassword + possibleCharacters[randomNumber];
    }
    return outputPassword;
};

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