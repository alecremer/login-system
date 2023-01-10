class createAccountController{
    
    constructor() {
        
        this.accountRegistered = "";
        this.passwordAndConfirmationAreEqual = "";
        this.passwordValidCharactersOrNumberOfCharacters = "";
        this.emailValid = "";
        
    }
    
    createAccount(accountData) {
        var createAccountModel = require("../model/CreateAccount/createAccount");
        
        var response = createAccountModel(accountData);
        
        this.accountRegistered = response.accountRegistered; 
        this.passwordAndConfirmationAreEqual = response.passwordAndConfirmationAreEqual; 
        this.passwordValidCharactersOrNumberOfCharacters = response.passwordValidCharactersOrNumberOfCharacters; 
        this.emailValid = response.emailValid; 
        

       
    }
}



module.exports = new createAccountController();