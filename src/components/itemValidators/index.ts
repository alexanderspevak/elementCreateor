import { Input, ItemMap } from '../constants';

type ValidationResult =
  | { validation: false; errorMessage: string }
  | { validation: true };

export const validateInput = ({
  subtype,
  subtype: { type, value }
}: Input): ValidationResult => {
  if (!subtype) {
    return { validation: false, errorMessage: 'input must have a subtype' };
  }

  if (ItemMap.input.subtypes.indexOf(type) === -1) {
    return {
      validation: false,
      errorMessage: 'input must have a valid subtype'
    };
  }

  if (type === 'date') {
    try {
      new Date(value as string);
    } catch (e) {
      return {
        validation: false,
        errorMessage: 'date input values must be a number greater than 0'
      };
    }
  }

  if (type === 'number') {
    if (value && !(typeof value === 'number')) {
      return {
        validation: false,
        errorMessage: 'number input values must be a number'
      };
    }
  }

  return {
    validation: true
  };
};
