import { getUnregistedPropMessage } from "./messages";
import {
  ValidationCallback,
  ValidationError,
  ValidationOptions,
  ValidationRules,
} from "./types";

function isNotRequiredValueInitialized(value: unknown) {
  let initialValue = value;
  if (value && typeof value === "object")
    initialValue = Object.keys(value).length;

  return !!initialValue;
}

export const handler = (
  rules: ValidationRules,
  callback: ValidationCallback,
  options?: ValidationOptions
) => ({
  get(target: Record<string, any>, prop: any) {
    return target[prop];
  },
  set(target: any, propName: string, value: any) {
    const propRules = rules[propName];
    target[propName] = value;

    let error: ValidationError = { [propName]: undefined };

    if (!propRules) {
      if (options && options.forbidNonRegistered)
        error = { [propName]: getUnregistedPropMessage(propName) };
      callback(error);
      return true;
    }

    if (!propRules.required && !isNotRequiredValueInitialized(value)) {
      callback(error);
      return true;
    }

    for (const instance of propRules.validators) {
      const result = instance.exec(value);
      if (!result.valid) error = { [propName]: result.error };
    }

    callback(error);
    return true;
  },
});
