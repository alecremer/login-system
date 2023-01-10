function validateAccountBuilder(data) {

    var validateEmail = require("./validateAccountData/validateEmail/validateEmail");
    var validatePassword = require("./validateAccountData/validatePassword/validatePasswordRequest");
    var validateAccountData = require("./validateAccountData/validateAccountData");
    
    var validatePasswordDecode = (data) => {
        
        var validatePasswordResponse = validatePassword(data.password, data.passwordConfirmation);
        var passwordValid = true;

        Object.values(validatePasswordResponse).forEach(field => {
            if(field === false) passwordValid = false;    
        });

        return passwordValid;
    };

    var validators = [
        (data) => validateEmail(data.email),
        (data) =>  validatePasswordDecode(data)];

    var accountDataIsValid = validateAccountData(data, validators);

    return accountDataIsValid;
}

module.exports = validateAccountBuilder;
