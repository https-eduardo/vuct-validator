import { BaseValidatorProps, ValidationResult } from "../types";

export abstract class BaseValidator {
  message?: string;
  constructor(props?: BaseValidatorProps) {
    if (props) this.message = props.message;
  }

  abstract exec(value: any): ValidationResult;
}
