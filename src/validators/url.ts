import { getValidationErrorMessage } from "../messages";
import { ValidationResult } from "../types";
import { BaseValidator } from './base';

export class UrlValidator extends BaseValidator {
  private URL_REGEX =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  exec(value: any): ValidationResult {
    const error = {
      valid: false,
      error: this.message ?? getValidationErrorMessage(UrlValidator.name),
    };

    if (typeof value !== "string") return error;

    if (!this.URL_REGEX.test(value)) return error;

    return { valid: true };
  }
}
