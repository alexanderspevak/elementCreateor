import { Config, Input, elementMap } from '../constants';

type ValidationResult =
  | { validation: false; errorMessage: string }
  | { validation: true };
export const validateInput = (input: Input): ValidationResult => {
  if (!input.subtype)
    return { validation: false, errorMessage: 'input must have a subtype' };
  if (elementMap.input.subtypes.indexOf(input.subtype) === -1) {
    return {
      validation: false,
      errorMessage: 'input must have a valid subtype'
    };
  }

  return {
    validation: true
  };
};
