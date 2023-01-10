const validateEmail = require("./validateEmail.js");
var responseCode = require("../../createAccountResponse");

var response = responseCode;

test("Return if email is valid", () => {
    expect(validateEmail("aaaaaa@gmail.com", response).emailValid).toBe(true);
    expect(validateEmail("aaaaa.aaaaa@gmail.com", response).emailValid).toBe(true);
    expect(validateEmail("aaa.aaaaa.aaaa@gmail.com", response).emailValid).toBe(true);
    expect(validateEmail("AAaaa.AAAaaa.BBBlkasdf_sadf@gmail.com.br", response).emailValid).toBe(true);

    expect(validateEmail("", response).emailValid).toBe(false);
    expect(validateEmail(null, response).emailValid).toBe(false);
    expect(validateEmail("asdf_asdf_asdf@@gmail.com", response).emailValid).toBe(false);
    expect(validateEmail("abcdefghijk@gmail@.com", response).emailValid).toBe(false);
    expect(validateEmail("abcdefghijk@gmail.com_", response).emailValid).toBe(false);
    expect(validateEmail("ab@cdefghijk@gmail.com_", response).emailValid).toBe(false);
});