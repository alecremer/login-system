const validatePasswordRequest = require("./validatePasswordRequest");
const responseCode = require("../../createAccountResponse");

var response = responseCode;

test("Return if password is valid or error code", () => {

    
    var validatePasswordResponse = validatePasswordRequest("abcd1234", "abcd1234", response);
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(true);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(true);

    validatePasswordResponse = validatePasswordRequest("123", "123", response);
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(true);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(false);
    
    validatePasswordResponse = validatePasswordRequest("1234abcd", "123abcde", response);
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(false);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(true);

    validatePasswordResponse = validatePasswordRequest("123;", "321a;", response);
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(false);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(false);

    validatePasswordResponse = validatePasswordRequest(undefined, "321a;", response);
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(false);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(false);

    validatePasswordResponse = validatePasswordRequest("321a;", undefined, response);
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(false);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(false);

    validatePasswordResponse = validatePasswordRequest(undefined, undefined, response);
    expect(validatePasswordResponse.passwordAndConfirmationAreEqual).toBe(false);
    expect(validatePasswordResponse.passwordValidCharactersOrNumberOfCharacters).toBe(false);

});