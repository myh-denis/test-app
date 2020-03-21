import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAX_MONTH, MIN_MONTH } from '../constants/default-values.const';
import { separators } from '../constants/separators';
import { validationMessages } from '../constants/validation-messages.const';

const FULL_YEAR = 2000;
const ONE = 1;

const required = (name: string, message: string = validationMessages.enter): ValidatorFn => {
  const fullMessage = `${message} ${name}`;
  return (control: AbstractControl): ValidationErrors => {
    if (Validators.required(control)) {
      return {
        required: fullMessage
      };
    }
    return null;
  };
};

const expirationDate = (name: string): ValidatorFn => {
  const expirationMessage = `${validationMessages.invalid} ${name}`;

  return (control: AbstractControl): ValidationErrors => {
    const values = control.value.split(separators.SLASH);

    const month = parseInt(values[0], 10);
    const year = parseInt(values[1], 10);

    const currentYear = new Date().getFullYear() - FULL_YEAR;
    const currentMonth = new Date().getMonth() + ONE;

    if (!month || !year || year < currentYear || (year === currentYear && month < currentMonth) || month < MIN_MONTH || month > MAX_MONTH) {
      return {
        expiration: expirationMessage
      };
    }

    return null;
  };
};

const minLength = (length: number, name: string, message: string[] = validationMessages.minLength): ValidatorFn => {
  const minLengthValidator = Validators.minLength(length);
  const fullMessage = `${name} ${message.join(String(length))}`;
  return (control: AbstractControl): ValidationErrors => {
    if (minLengthValidator(control)) {
      return {
        minLength: fullMessage
      };
    }
    return null;
  };
};

const maxLength = (length: number, name: string, message: string[] = validationMessages.maxLength): ValidatorFn => {
  const maxLengthValidator = Validators.maxLength(length);
  const fullMessage = `${name} ${message.join(String(length))}`;
  return (control: AbstractControl): ValidationErrors => {
    if (maxLengthValidator({ value: (control.value || '').toString() } as AbstractControl)) {
      return {
        maxLength: fullMessage
      };
    }
    return null;
  };
};


const formValidators = {
  required,
  expirationDate,
  minLength,
  maxLength
};

export default formValidators;
