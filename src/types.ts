import { BaseValidator } from "./validators/base";

export interface ValidationOptions {
  forbidNonRegistered: boolean;
}

export interface ReactValidationData<T> {
  name: string;
  value: T;
}

export interface VueValidationSettings {
  options?: ValidationOptions;
  rules: ValidationRules;
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export interface BaseValidatorProps {
  message?: string;
  [key: string]: any;
}

export interface ValidationRule {
  validators: BaseValidator[];
  required?: boolean;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export type ValidationError<T = any> = {
  [Property in keyof T]: string | undefined;
};

export type ValidationCallback = (error: ValidationError) => void;
