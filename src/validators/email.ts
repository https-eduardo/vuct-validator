import { getValidationErrorMessage } from "../messages";
import { ValidationResult } from "../types";
import { BaseValidator } from './base';

export class EmailValidator extends BaseValidator {
  private EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  exec(value: any): ValidationResult {
    const error = {
      valid: false,
      error: this.message ?? getValidationErrorMessage(EmailValidator.name),
    };

    if (typeof value !== "string") return error;

    if (!this.EMAIL_REGEX.test(value)) return error;

    return { valid: true };
  }
}
