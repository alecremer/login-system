function createAccount(accountData) {
    
    var validateAccountBuilder = require('./validateAccountBuilder/validateAccountBuilder');
    var registerAccount = require('./registerAccount');

    var createAccountResponse;

    createAccountResponse = validateAccountBuilder(accountData);
    var accountValid = createAccountResponse.accountDataValid;

    var accountRegistered;

    if(accountValid){
        accountRegistered = registerAccount(accountData);
    }
    else accountRegistered = false;

    createAccountResponse.accountRegistered = accountRegistered;
    
    return createAccountResponse;

}

module.exports = createAccount;