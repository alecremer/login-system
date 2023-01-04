function createAccount(accountData) {
    
    var validateAccountBuilder = require('./validateAccountBuilder/validateAccountBuilder');
    var registerAccount = require('./registerAccount');

    var accountValid = validateAccountBuilder(data);
    var accountRegistered;

    if(accountValid){
        accountRegistered = registerAccount(data);
    }
    
    return accountRegistered;

}

module.exports = createAccount;