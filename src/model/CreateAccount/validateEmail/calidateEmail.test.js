const validateEmail = require("./validateEmail.js");

test("Return if email is valid", () => {
    expect(validateEmail("aaaaaa@gmail.com")).toBe(true);
    expect(validateEmail("aaaaa.aaaaa@gmail.com")).toBe(true);
    expect(validateEmail("aaa.aaaaa.aaaa@gmail.com")).toBe(true);
    expect(validateEmail("AAaaa.AAAaaa.BBBlkasdf_sadf@gmail.com.br")).toBe(true);

    expect(validateEmail("asdf_asdf_asdf@@gmail.com")).toBe(false);
    expect(validateEmail("abcdefghijk@gmail@.com")).toBe(false);
    expect(validateEmail("abcdefghijk@gmail.com_")).toBe(false);
    expect(validateEmail("ab@cdefghijk@gmail.com_")).toBe(false);
});