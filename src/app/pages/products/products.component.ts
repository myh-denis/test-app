import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import { CartAddProduct } from '../../core/actions/cart.actions';
import { SelectSimplifier } from '../../utils/select-simplifier';
import { FetchProductListData, ResetProductList } from './actions';
import { IProductItemModel } from './models/product-item.model';
import { IAppStateWithProductList } from './reducers';
import selectFromProductList from './selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  public loading: boolean;
  public page: number;
  public total: number;
  public productList: IProductItemModel[] = [];

  public showButton = false;

  constructor(private store: Store<IAppStateWithProductList>,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.store.dispatch(new FetchProductListData());

    this.subscription = new SelectSimplifier<IAppStateWithProductList, ProductsComponent>(this.store, this)
      .selectInKey(selectFromProductList.getLoading, 'loading')
      .selectInKey(selectFromProductList.getList, 'productList')
      .selectInKey(selectFromProductList.getPage, 'page')
      .selectInKey(selectFromProductList.getTotal, 'total')
      .subscribe(() => {
        this.showButton = this.productList.length < this.total;

        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new ResetProductList());
  }

  showMore() {
    if (!this.showButton) {
      return;
    }

    this.store.dispatch(new FetchProductListData(this.page + 1));
  }

  addProduct(product: IProductItemModel) {
    this.store.dispatch(new CartAddProduct(product));
  }
}
