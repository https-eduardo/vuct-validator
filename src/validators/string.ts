import { getValidationErrorMessage } from "../messages";
import { ValidationResult } from '../types';
import { BaseValidator } from "./base";

export class StringValidator extends BaseValidator {
  exec(value: any): ValidationResult {
    if (typeof value !== "string")
      return {
        valid: false,
        error: this.message ?? getValidationErrorMessage(StringValidator.name),
      };
    return { valid: true };
  }
}
