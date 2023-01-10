function createAccount(accountData) {
    
    var validateAccountBuilder = require('./validateAccountBuilder/validateAccountBuilder');
    var registerAccount = require('./registerAccount');

    var accountValid = validateAccountBuilder(accountData);
    var accountRegistered;

    if(accountValid){
        accountRegistered = registerAccount(accountData);
    }
    
    return accountRegistered;

}

module.exports = createAccount;