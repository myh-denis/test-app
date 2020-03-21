import { Action } from '@ngrx/store';
import { IProductItemModel } from '../../products/models/product-item.model';
import { IFormModel } from '../models/form.model';

export enum PaymentActionsTypes {
  SEND_DATA = '[PAYMENT_LIST] SEND_DATA',
  SUCCESSFUL_SEND = '[PAYMENT_LIST] SUCCESSFUL_SEND',
  FAILURE_SEND = '[PAYMENT_LIST] FAILURE_SEND',
  RESET = '[PAYMENT_LIST] RESET'
}

export class SendPaymentData implements Action {
  readonly type = PaymentActionsTypes.SEND_DATA;

  constructor(public list: IProductItemModel[], public form: IFormModel) {}
}

export class PaymentSuccessfulSend implements Action {
  readonly type = PaymentActionsTypes.SUCCESSFUL_SEND;
}

export class PaymentFailureSend implements Action {
  readonly type = PaymentActionsTypes.FAILURE_SEND;
}

export class ResetPayment implements Action {
  readonly type = PaymentActionsTypes.RESET;
}

export type PaymentAction = SendPaymentData | PaymentSuccessfulSend | PaymentFailureSend | ResetPayment;
