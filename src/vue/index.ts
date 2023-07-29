import { handler } from "../handler";
import {
  ValidationCallback,
  ValidationOptions,
  ValidationRules,
} from "../types";

/**
 * Returns an object that listen to every change on its properties an validate based on its declared rules.
 *
 * @param {Record<string, any>} data The initial object of this state.
 * @param {VueValidationSettings} rules Rules that will be used to validate the object.
 * @param {ValidationCallback} callback An function that will be called when some property change.
 * @param {ValidationOptions} [options] Additional options to be used in validation.
 * @return {Record<string, any>} an proxied object.
 */
export function withValidator<T = Record<string, any>>(
  data: Record<string, any>,
  rules: ValidationRules,
  callback: ValidationCallback,
  options?: ValidationOptions
): T {
  return new Proxy(data, handler(rules, callback, options));
}
