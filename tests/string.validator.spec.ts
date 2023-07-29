import { StringValidator } from "../src/validators/string";
import { expect, describe, it } from "@jest/globals";

describe("StringValidator test suite", () => {
  it("should return an error message if the value isn't a string", () => {
    const value = 0;
    const stringValidator = new StringValidator();

    const result = stringValidator.exec(value);
    const expectedErrorMessage =
      "Value does not match validator of type: StringValidator";

    expect(result.error).toBeDefined();
    expect(result.error).toBe(expectedErrorMessage);
  });

  it("should return valid = true if the value is a string", () => {
    const value = "";
    const stringValidator = new StringValidator();

    const result = stringValidator.exec(value);
    const expectedValidResult = true;

    expect(result.error).not.toBeDefined();
    expect(result.valid).toBe(expectedValidResult);
  });
});
