import { useMemo, useState } from "react";
import { handler } from "../handler";
import {
  ReactValidationData,
  ValidationCallback,
  ValidationOptions,
  ValidationRule,
} from "../types";

/**
 * Returns an state that listen to every change on value an validate based on its declared rules.
 *
 * @param {ReactValidationData<T>} data The initial value of this state.
 * @param {ValidationRule} rule Settings that will be used to validate the value.
 * @param {ValidationCallback} callback An function that will be called when the value change.
 * @param {ValidationOptions} [options] An function that will be called when the value change.
 * @return an array containing the value and the setter function, equal to useState.
 */
export function useValidatedState<T = never>(
  data: ReactValidationData<T>,
  rule: ValidationRule,
  callback: ValidationCallback,
  options?: ValidationOptions
): [value: T, setter: (value: T) => void] {
  const name = data.name;
  const [value, setValue] = useState<T>(data.value);

  const valueProxy = useMemo(
    () =>
      new Proxy(
        { [name]: value },
        handler({ [name]: rule }, callback, options)
      ),
    []
  );

  const setterFunction = (value: T) => {
    valueProxy[name] = value;
    setValue(value);
  };

  return [value, setterFunction];
}