import { IAppState } from '../../../core/models/app-state';
import { PaymentAction, PaymentActionsTypes } from '../actions';
import { PAYMENT_STORE_KEY } from '../constants';

export interface IPaymentState {
  loading: boolean;
  complete: boolean;
  success: boolean;
}

export const initialState: IPaymentState = {
  loading: false,
  complete: false,
  success: false
};

export interface IAppStateWithPayment extends IAppState {
  [PAYMENT_STORE_KEY]: IPaymentState;
}

export function paymentReducer(
  state: IPaymentState = initialState,
  action: PaymentAction
): IPaymentState {
  switch (action.type) {
    case PaymentActionsTypes.SEND_DATA:
      return {
        ...state,
        loading: true,
        complete: false
      };

    case PaymentActionsTypes.SUCCESSFUL_SEND:
    case PaymentActionsTypes.FAILURE_SEND:
      return {
        ...state,
        loading: false,
        complete: true,
        success: action.type === PaymentActionsTypes.SUCCESSFUL_SEND
      };

    case PaymentActionsTypes.RESET:
      return {
        ...initialState
      };

    default:
      return state;
  }
}
