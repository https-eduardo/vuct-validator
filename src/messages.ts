export const getValidationErrorMessage = (className: string) =>
  `Value does not match validator of type: ${className}`;
export const getUnregistedPropMessage = (propName: string | number) =>
  `Property '${propName}' not registered in validation rules`;
