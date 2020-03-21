import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProductItemModel } from '../pages/products/models/product-item.model';
import { IAppStateWithProductList } from '../pages/products/reducers';
import { SelectSimplifier } from '../utils/select-simplifier';
import selectFromCart from './selectors/cart.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreComponent implements OnInit {
  public products: IProductItemModel[];

  constructor(private store: Store<IAppStateWithProductList>,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    new SelectSimplifier<IAppStateWithProductList, CoreComponent>(this.store, this)
      .selectInKey(selectFromCart.getProducts, 'products')
      .subscribe(() => {
        this.changeDetectorRef.detectChanges();
      });
  }
}
