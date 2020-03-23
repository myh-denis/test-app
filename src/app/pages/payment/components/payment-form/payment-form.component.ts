import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import formValidators from '../../../../utils/form-validators';
import { MIN_CARD_NUMBER_LENGTH } from '../../constants';
import { FORM_LABELS, FormControlNames } from '../../constants/form-inputs.const';
import maskTypes from '../../constants/mask-types.const';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  @Input() totalPrice: number;
  @Output() formSubmit = new EventEmitter();

  public mask = maskTypes;
  public form: FormGroup;
  public formLabels = FORM_LABELS;
  public formControlNames = FormControlNames;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    const { USER_NAME, CARD_NUMBER, EXPIRATION_DATE, SECURITY_CODE } = FormControlNames;

    this.form = this.fb.group({
      payment: this.fb.group({
        [USER_NAME]: ['', formValidators.required(this.formLabels[USER_NAME])],
        [CARD_NUMBER]: ['', [
          formValidators.required(this.formLabels[CARD_NUMBER]),
          formValidators.minLength(MIN_CARD_NUMBER_LENGTH, this.formLabels[CARD_NUMBER])
        ]],
        [EXPIRATION_DATE]: ['', formValidators.expirationDate(this.formLabels[EXPIRATION_DATE])],
        [SECURITY_CODE]: ['', formValidators.required(this.formLabels[SECURITY_CODE])],
      })
    });
  }

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.formSubmit.emit(this.form.value.payment);
  }
}
