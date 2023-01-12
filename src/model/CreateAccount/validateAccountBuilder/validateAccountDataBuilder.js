var responseCode = require("../createAccountResponse");


function validateAccountDataBuilder(data) {
    
    var response = responseCode;

    var validateIfUsernameWasNotInUse = require("./validateAccountData/validateUserName/validateIfUsernameWasNotInUse");
    var validateEmail = require("./validateAccountData/validateEmail/validateEmail");
    var validateIfEmailWasNotInUse = require("./validateAccountData/validateEmail/validateIfEmailWasNotInUse");
    var validatePassword = require("./validateAccountData/validatePassword/validatePasswordRequest");
    var validateAccountData = require("./validateAccountData/validateAccountData");
    

    var validateUsernameDecode = (data) => {
        
        if(data){
            
            response = validateIfUsernameWasNotInUse(data.username, response);
            
            return !response.usernameInUse;

        }
        else return false;
    };

    var validatePasswordDecode = (data) => {
        
        if(data){
            
            response = validatePassword(data.password, data.passwordConfirmation, response);
            var passwordValid = (response.passwordAndConfirmationAreEqual && response.passwordValidCharactersOrNumberOfCharacters);
            
            return passwordValid;

        }
        else return false;
    };
    
    var validateEmailDecode = (data) => {
        
        if(data){
            
            response = validateEmail(data.email, response);
            response = validateIfEmailWasNotInUse(data.email, response);
            return (response.emailValid && !response.emailInUse);
            
        }
        else return false;
    }

    var validators = [
        
        (data) => validateUsernameDecode(data),
        (data) => validatePasswordDecode(data),
        (data) =>  validateEmailDecode(data)];

    var accountDataIsValid = validateAccountData(data, validators);
    
    response.accountDataValid = accountDataIsValid;

    return response;
}

module.exports = validateAccountDataBuilder;
