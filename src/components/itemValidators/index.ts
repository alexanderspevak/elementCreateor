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

  if (type === 'date' && value) {
    try {
      new Date(value);
    } catch (e) {
      return {
        validation: false,
        errorMessage: 'invalid date value'
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
