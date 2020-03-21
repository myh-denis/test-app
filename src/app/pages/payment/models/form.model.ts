import { FormControlNames } from '../constants/form-inputs.const';

export interface IFormModel {
  [FormControlNames.USER_NAME]: string;
  [FormControlNames.CARD_NUMBER]: string;
  [FormControlNames.EXPIRATION_DATE]: string;
  [FormControlNames.SECURITY_CODE]: string;
}
