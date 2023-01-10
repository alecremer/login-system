var responseCode = require("./createAccountResponse");


function validateAccountBuilder(data) {
    
    var response = responseCode;

    var validateEmail = require("./validateAccountData/validateEmail/validateEmail");
    var validatePassword = require("./validateAccountData/validatePassword/validatePasswordRequest");
    var validateAccountData = require("./validateAccountData/validateAccountData");
    

    // to do:
    // return object with data response

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
            return response.emailValid;
            
        }
        else return false;
    }

    var validators = [
        (data) => validatePasswordDecode(data),
        (data) =>  validateEmailDecode(data)];

    var accountDataIsValid = validateAccountData(data, validators);
    
    response.accountDataValid = accountDataIsValid;

    return response;
}

module.exports = validateAccountBuilder;
