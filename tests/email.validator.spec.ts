import { EmailValidator } from "../src/validators/email";
import { expect, describe, it } from "@jest/globals";

describe("EmailValidator test suite", () => {
  it("should return an error message if the value isn't a valid email", () => {
    const value = "eduardo@gj.x";
    const emailValidator = new EmailValidator();

    const result = emailValidator.exec(value);
    const expectedErrorMessage =
      "Value does not match validator of type: EmailValidator";

    expect(result.error).toBeDefined();
    expect(result.error).toBe(expectedErrorMessage);
  });

  it("should return valid = true if the value is a valid email", () => {
    const value = "eduardo@myfakeemail.com";
    const emailValidator = new EmailValidator();

    const result = emailValidator.exec(value);
    const expectedValidResult = true;

    expect(result.error).not.toBeDefined();
    expect(result.valid).toBe(expectedValidResult);
  });
});
