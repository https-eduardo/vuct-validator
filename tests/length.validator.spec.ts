import { LengthValidator } from "../src/validators/length";
import { expect, describe, it } from "@jest/globals";

describe("LengthValidator test suite", () => {
  const VALIDATION_EXPECTED_ERROR =
    "Value does not match validator of type: LengthValidator";

  it("should return an error message if the value has less than 5 letters", () => {
    const value = "1234";
    const lengthValidator = new LengthValidator({ min: 5 });

    const result = lengthValidator.exec(value);

    expect(result.error).toBeDefined();
    expect(result.error).toBe(VALIDATION_EXPECTED_ERROR);
  });

  it("should return an error message if the length of the text does not match an interval between 5 and 16", () => {
    const value = "onetwotreefourfive";
    const lengthValidator = new LengthValidator({ min: 5, max: 16 });

    const result = lengthValidator.exec(value);

    expect(result.error).toBeDefined();
    expect(result.error).toBe(VALIDATION_EXPECTED_ERROR);
  });

  it("should return valid = true if the text have a valid length", () => {
    const value = "onetwotreefourfive";
    const lengthValidator = new LengthValidator({ max: 18 });

    const result = lengthValidator.exec(value);
    const expectedResult = true;

    expect(result.error).not.toBeDefined();
    expect(result.valid).toBe(expectedResult);
  });

  it("should return valid = true if the array have a valid length", () => {
    const value = ["valid", "length"];
    const lengthValidator = new LengthValidator({ max: 3 });

    const result = lengthValidator.exec(value);
    const expectedResult = true;

    expect(result.error).not.toBeDefined();
    expect(result.valid).toBe(expectedResult);
  });
});
