import { UrlValidator } from "../src/validators/url";
import { expect, describe, it } from "@jest/globals";

describe("UrlValidator test suite", () => {
  it("should return an error message if the value isn't a valid url", () => {
    const value = "http://invalidurl.";
    const urlValidator = new UrlValidator();

    const result = urlValidator.exec(value);
    const expectedErrorMessage =
      "Value does not match validator of type: UrlValidator";

    expect(result.error).toBeDefined();
    expect(result.error).toBe(expectedErrorMessage);
  });

  it("should return valid = true if the value is a valid url", () => {
    const value = "http://validurl.com";
    const urlValidator = new UrlValidator();

    const result = urlValidator.exec(value);
    const expectedValidResult = true;

    expect(result.error).not.toBeDefined();
    expect(result.valid).toBe(expectedValidResult);
  });
});
