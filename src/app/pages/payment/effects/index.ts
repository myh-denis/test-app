import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { EmptyCart } from '../../../core/actions/cart.actions';
import { IApiResponseModel } from '../../../models/api-response.model';
import { PaymentActionsTypes, PaymentFailureSend, PaymentSuccessfulSend, SendPaymentData } from '../actions';
import { PaymentApiService } from '../services';

@Injectable()
export class PaymentEffects {
  constructor(
    private actions: Actions,
    private paymentService: PaymentApiService) {
  }

  @Effect()
  propertiesShowMore = this.actions.pipe(
    ofType(PaymentActionsTypes.SEND_DATA),
    mergeMap(({ list, form }: SendPaymentData) => {
      return this.paymentService.sendOrder(list, form).pipe(
        switchMap(({ success }: IApiResponseModel) => {
          if (!success) {
            return [
              new PaymentFailureSend()
            ];
          }
          return [
            new PaymentSuccessfulSend(),
            new EmptyCart()
          ];
        }),
        catchError(() => {
          return of(new PaymentFailureSend());
        })
      );
    })
  );
}
