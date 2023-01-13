const createAccount = require("./createAccount");

var dataOK = {email: "email.test@somemail.com", password: "somePassword123@@", passwordConfirmation: "somePassword123@@"}; 
var dataEmailError = {email: "email.test.com", password: "somePassword123@@", passwordConfirmation: "somePassword123@@"};
var dataPasswordError = {email: "email.test@somemail.com", password: "123456789;", passwordConfirmation: "123456789"};
var dataPasswordConfirmationError = {email: "email.test@somemail.com", password: "somePassword123@@;", passwordConfirmation: "somePassword123@"};

test("Return account is valid", () => {
    expect(createAccount(dataOK).accountRegistered).toBe(true);

    expect(createAccount(dataEmailError).accountRegistered).toBe(false);
    expect(createAccount(dataPasswordError).accountRegistered).toBe(false);
    expect(createAccount(dataPasswordConfirmationError).accountRegistered).toBe(false);

});