import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TextMaskModule } from 'angular2-text-mask';
import { InputErrorsModule } from '../../components/input-errors/input-errors.module';
import { LoaderModule } from '../../components/loader/loader.module';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { PaymentResultComponent } from './components/payment-result/payment-result.component';
import { PAYMENT_STORE_KEY } from './constants';
import { PaymentEffects } from './effects';
import { PaymentComponent } from './payment.component';
import { paymentReducer } from './reducers';
import { PaymentApiService } from './services';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    TextMaskModule,
    InputErrorsModule,
    MatButtonModule,
    LoaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: PaymentComponent
      }
    ]),
    StoreModule.forFeature(PAYMENT_STORE_KEY, paymentReducer),
    EffectsModule.forFeature([
      PaymentEffects
    ])
  ],
  declarations: [
    PaymentComponent,
    PaymentFormComponent,
    PaymentResultComponent
  ],
  providers: [
    PaymentApiService
  ]
})
export class PaymentModule {
}
