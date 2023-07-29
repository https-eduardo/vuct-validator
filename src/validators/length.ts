import { getValidationErrorMessage } from "../messages";
import { BaseValidatorProps, ValidationResult } from "../types";
import { BaseValidator } from "./base";

type LengthValidatorProps = BaseValidatorProps &
  ({ min: number } | { max: number });

export class LengthValidator extends BaseValidator {
  min?: number;
  max?: number;

  constructor(props?: LengthValidatorProps) {
    super({ message: props?.message });
    this.min = props?.min;
    this.max = props?.max;
  }

  exec(value: any): ValidationResult {
    const error = {
      valid: false,
      error: this.message ?? getValidationErrorMessage(LengthValidator.name),
    };

    if (value === undefined || value === null) return error;
    const length = value.length;

    if (!length || typeof length !== "number") return error;

    if (this.min && length < this.min) return error;

    if (this.max && length > this.max) return error;

    return { valid: true };
  }
}
