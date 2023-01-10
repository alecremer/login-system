const createAccountController = require("./createAccountController");

var dataOK = {email: "email.test@somemail.com", password: "somePassword123@@", passwordConfirmation: "somePassword123@@"}; 
var dataEmailEmpty = {email: "", password: "somePassword123@@", passwordConfirmation: "somePassword123@@"}; 
var dataEmailError = {email: "email.test.com", password: "somePassword123@@", passwordConfirmation: "somePassword123@@"};
var dataPasswordError = {email: "email.test@somemail.com", password: "123456789;", passwordConfirmation: "123456789"};
var dataPasswordConfirmationError = {email: "email.test@somemail.com", password: "somePassword123@@;", passwordConfirmation: "somePassword123@"};
var dataEmailUndefined = {email: undefined, password: "somePassword123@@", passwordConfirmation: "somePassword123@"};
var dataPasswordUndefined = {email: "email.test@somemail.com", password: undefined, passwordConfirmation: "somePassword123@"};
var dataPasswordConfirmationUndefined = {email: "email.test@somemail.com", password: "somePassword123@@", passwordConfirmation: undefined};

test("Return account is valid", () => {

    createAccountController.createAccount(dataOK);
    expect(createAccountController.accountRegistered).toBe(true);


    createAccountController.createAccount(dataEmailError);
    expect(createAccountController.accountRegistered).toBe(false);

    createAccountController.createAccount(dataEmailEmpty);
    expect(createAccountController.accountRegistered).toBe(false);

    createAccountController.createAccount(dataPasswordError);
    expect(createAccountController.accountRegistered).toBe(false);

    createAccountController.createAccount(dataPasswordConfirmationError);
    expect(createAccountController.accountRegistered).toBe(false);

    createAccountController.createAccount(dataEmailUndefined);
    expect(createAccountController.accountRegistered).toBe(false);

    createAccountController.createAccount(dataPasswordUndefined);
    expect(createAccountController.accountRegistered).toBe(false);

    createAccountController.createAccount(dataPasswordConfirmationUndefined);
    expect(createAccountController.accountRegistered).toBe(false);

});