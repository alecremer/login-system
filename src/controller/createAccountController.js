import createAccount from "../model/CreateAccount/createAccount";

function createAccountController(accountData) {

    return createAccount(accountData);

}

export default createAccountController;