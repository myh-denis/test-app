import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PAYMENT_STORE_KEY } from '../constants';
import { IAppStateWithPayment, IPaymentState } from '../reducers';

export const selectPaymentState = createFeatureSelector<IPaymentState>(PAYMENT_STORE_KEY);

export const fromPaymentState = <T>(projector: (s: IPaymentState) => T) =>
  createSelector<IAppStateWithPayment, IPaymentState, T>(selectPaymentState, projector);

const loading = fromPaymentState<boolean>((state: IPaymentState) => state.loading);
const complete = fromPaymentState<boolean>((state: IPaymentState) => state.complete);
const success = fromPaymentState<boolean>((state: IPaymentState) => state.success);

const selectFromPayment = {
  loading,
  complete,
  success
};

export default selectFromPayment;
