const comparePasswordAndConfirmation  = require("./comparePasswordAndConfirmation/comparePasswordAndConfirmation");
const validatePasswordCharacters =  require("./validateCharacters/validatePasswordCharacters");
const responseCode = require("../../createAccountResponse");

function validatePasswordRequest(password, passwordConfirmation) {

    var response = responseCode;

    var passwordAndConfirmationAreEqual = comparePasswordAndConfirmation(password, passwordConfirmation);
    var validCharacters = validatePasswordCharacters(password, passwordConfirmation);



    response.passwordAndConfirmationAreEqual = passwordAndConfirmationAreEqual;
    response.passwordValidCharactersOrNumberOfCharacters = validCharacters;

    return response;

}

module.exports = validatePasswordRequest;