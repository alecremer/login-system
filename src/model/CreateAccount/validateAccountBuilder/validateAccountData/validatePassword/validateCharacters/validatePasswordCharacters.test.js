const validatePasswordCharacters = require("./validatePasswordCharacters.js");

test("Return if password is valid", () => {
    expect(validatePasswordCharacters("12345678")).toBe(true);
    expect(validatePasswordCharacters("abcdefgh")).toBe(true);
    expect(validatePasswordCharacters("abcdefgh1541")).toBe(true);
    expect(validatePasswordCharacters("abcdefgh1541##")).toBe(true);
    expect(validatePasswordCharacters("abcdefgh1541##___")).toBe(true);
    expect(validatePasswordCharacters("ABCD1234")).toBe(true);
    expect(validatePasswordCharacters("01234567890123456789012345678912")).toBe(true);

    expect(validatePasswordCharacters("")).toBe(false);
    expect(validatePasswordCharacters(null)).toBe(false);
    expect(validatePasswordCharacters("ABCD1234;")).toBe(false);
    expect(validatePasswordCharacters("ABCD1234'")).toBe(false);
    expect(validatePasswordCharacters("ABCD1234\"")).toBe(false);
    expect(validatePasswordCharacters("1234567")).toBe(false);
    expect(validatePasswordCharacters("0123456789012345678901234567891234567890")).toBe(false);
});