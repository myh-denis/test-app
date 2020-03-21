import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import selectFromCart from '../../core/selectors/cart.selectors';
import { SelectSimplifier } from '../../utils/select-simplifier';
import { IProductItemModel } from '../products/models/product-item.model';
import { ResetPayment, SendPaymentData } from './actions';
import { IFormModel } from './models/form.model';
import { IAppStateWithPayment } from './reducers';
import selectFromPayment from './selectors';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public products: IProductItemModel[] = [];
  public loading: boolean;
  public complete: boolean;
  public success: boolean;

  constructor(private store: Store<IAppStateWithPayment>, private changeDetectorRef: ChangeDetectorRef) {
  }

  get totalPrice(): number {
    return this.products.reduce((acc, { price }) => acc + price, 0);
  }

  ngOnInit() {
    this.subscription = new SelectSimplifier<IAppStateWithPayment, PaymentComponent>(this.store, this)
      .selectInKey(selectFromCart.getProducts, 'products')
      .selectInKey(selectFromPayment.loading, 'loading')
      .selectInKey(selectFromPayment.complete, 'complete')
      .selectInKey(selectFromPayment.success, 'success')
      .subscribe(() => {
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new ResetPayment());
  }

  onSubmit(formValue: IFormModel) {
    this.store.dispatch(new SendPaymentData(this.products, formValue));
  }
}
