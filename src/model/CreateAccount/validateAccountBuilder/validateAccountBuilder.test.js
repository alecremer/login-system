const validateAccountBuilder = require("./validateAccountBuilder.js");

var dataOK = {email: "email.test@somemail.com", password: "somePassword123@@"}; 
var dataEmailError = {email: "email.test.com", password: "somePassword123@@"};
var dataPasswordError = {email: "email.test@somemail.com", password: "123456789;"};

test("Return account is valid", () => {
    expect(validateAccountBuilder(dataOK)).toBe(true);

    expect(validateAccountBuilder(dataEmailError)).toBe(false);
    expect(validateAccountBuilder(dataPasswordError)).toBe(false);

});