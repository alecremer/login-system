const validatePassword = require("./validatePassword.js");

test("Return if password is valid", () => {
    expect(validatePassword("12345678")).toBe(true);
    expect(validatePassword("abcdefgh")).toBe(true);
    expect(validatePassword("abcdefgh1541")).toBe(true);
    expect(validatePassword("abcdefgh1541##")).toBe(true);
    expect(validatePassword("abcdefgh1541##___")).toBe(true);
    expect(validatePassword("ABCD1234")).toBe(true);
    expect(validatePassword("01234567890123456789012345678912")).toBe(true);

    expect(validatePassword("")).toBe(false);
    expect(validatePassword(null)).toBe(false);
    expect(validatePassword("ABCD1234;")).toBe(false);
    expect(validatePassword("ABCD1234'")).toBe(false);
    expect(validatePassword("ABCD1234\"")).toBe(false);
    expect(validatePassword("1234567")).toBe(false);
    expect(validatePassword("0123456789012345678901234567891234567890")).toBe(false);
});