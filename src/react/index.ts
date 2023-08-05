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
 * @param {T} initialValue The initial value of this state.
 * @param {ReactValidationSettings} validationSettings Settings that will be used to validate the value.
 * @param {ValidationCallback} callback An function that will be called when the value change.
 * @return {value: T, setter: (value: T) => void} an array containing the value and the setter function, equal to useState.
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
    [value]
  );

  const setterFunction = (value: T) => {
    valueProxy[name] = value;
    setValue(value);
  };

  return [value, setterFunction];
}