const comparePasswordAndConfirmation  = require("./comparePasswordAndConfirmation/comparePasswordAndConfirmation");
const validatePasswordCharacters =  require("./validateCharacters/validatePasswordCharacters");

function validatePasswordRequest(password, passwordConfirmation, responseToHandle) {

    var response = responseToHandle;

    var passwordAndConfirmationAreEqual = comparePasswordAndConfirmation(password, passwordConfirmation);
    var validCharacters = validatePasswordCharacters(password, passwordConfirmation);



    response.passwordAndConfirmationAreEqual = passwordAndConfirmationAreEqual;
    response.passwordValidCharactersOrNumberOfCharacters = validCharacters;

    return response;

}

module.exports = validatePasswordRequest;