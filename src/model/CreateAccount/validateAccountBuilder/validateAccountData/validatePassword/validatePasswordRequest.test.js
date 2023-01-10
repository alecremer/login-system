const validatePasswordRequest = require("./validatePasswordRequest");

test("Return if password is valid or error code", () => {

    
    var validatePasswordResponse = validatePasswordRequest("abcd1234", "abcd1234");
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(true);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(true);

    validatePasswordResponse = validatePasswordRequest("123", "123");
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(true);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(false);
    
    validatePasswordResponse = validatePasswordRequest("1234abcd", "123abcde");
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(false);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(true);

    validatePasswordResponse = validatePasswordRequest("123;", "321a;");
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(false);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(false);

});