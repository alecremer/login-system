function validateAccountBuilder(data) {

    var validateEmail = require("./validateAccountData/validateEmail/validateEmail");
    var validatePassword = require("./validateAccountData/validatePassword/validatePassword");
    var validateAccountData = require("./validateAccountData/validateAccountData");
    
    var validators = [
        (data) => validateEmail(data.email),
        (data) =>  validatePassword(data.password)];

    var accountDataIsValid = validateAccountData(data, validators);

    return accountDataIsValid;
}

module.exports = validateAccountBuilder;
