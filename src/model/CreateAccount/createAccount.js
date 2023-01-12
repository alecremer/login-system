function createAccount(accountData) {
    
    // require modules --------------------------------------------------------

    var validateAccountBuilder = require('./validateAccountBuilder/validateAccountDataBuilder');
    var registerAccount = require('./registerAccount');



    // validate account data --------------------------------------------------
    
    var createAccountResponse;

    createAccountResponse = validateAccountBuilder(accountData);
    var accountDataValid = createAccountResponse.accountDataValid;
    
    

    // register account -------------------------------------------------------

    var accountRegistered;

    if(accountDataValid){
        accountRegistered = registerAccount(accountData);
    }
    else accountRegistered = false;

    createAccountResponse.accountRegistered = accountRegistered;
    
    return createAccountResponse;

}

module.exports = createAccount;