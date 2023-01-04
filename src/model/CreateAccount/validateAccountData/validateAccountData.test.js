const validateAccountData = require("./validateAccountData.js");

var emailIsNotNullEmptyUndefined = (data) => {
    if(data.email) return true;
    else return false;
};

var passwordIsNotNullEmptyUndefined = (data) => {
    if(data.password) return true;
    else return false;
}

var validators = [emailIsNotNullEmptyUndefined, passwordIsNotNullEmptyUndefined];
var nullValue;

test("Return if email is valid", () => {
    expect(validateAccountData({email: "email", password: "password"}, validators)).toBe(true);
    
    expect(validateAccountData({email: "email", password: nullValue}, validators)).toBe(false);
    expect(validateAccountData({email: nullValue, password: "password"}, validators)).toBe(false);
    expect(validateAccountData({email: nullValue, password: nullValue}, validators)).toBe(false);
    expect(validateAccountData({email: "", password: "password"}, validators)).toBe(false);
    expect(validateAccountData({email: "email", password: ""}, validators)).toBe(false);
    expect(validateAccountData({email: "", password: ""}, validators)).toBe(false);
});