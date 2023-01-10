const comparePasswordAndConfirmation = require("./comparePasswordAndConfirmation");

test("Return if password and confirmation are equal", () => {
    expect(comparePasswordAndConfirmation("12345678", "12345678")).toBe(true);
    
    expect(comparePasswordAndConfirmation("12345678", "12345678a")).toBe(false);
});