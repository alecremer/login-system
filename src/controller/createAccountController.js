class createAccountController{
    
    constructor() {
        
        this.accountRegistered = "";
        this.passwordAndConfirmationAreEqual = "";
        this.passwordValidCharactersOrNumberOfCharacters = "";
        this.emailValid = "";
        this.accountDataValid = "";
        
    }
    
    createAccount(accountData) {
        var createAccountModel = require("../model/CreateAccount/createAccount");
        
        var response = createAccountModel(accountData);
        
        this.accountRegistered = response.accountRegistered; 
        this.passwordAndConfirmationAreEqual = response.passwordAndConfirmationAreEqual; 
        this.passwordValidCharactersOrNumberOfCharacters = response.passwordValidCharactersOrNumberOfCharacters; 
        this.emailValid = response.emailValid; 
        this.accountDataValid = response.accountDataValid; 
        this.usernameInUse = response.usernameInUse;
        this.emailInUse = response.emailInUse;

        Object.entries(this).forEach(field => {
            const [key, value] = field;
            console.log(key, value);
        });
        

       
    }
}



module.exports = new createAccountController();