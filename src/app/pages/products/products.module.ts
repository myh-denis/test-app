import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoaderModule } from '../../components/loader/loader.module';
import { ProductCardModule } from '../../components/product-card/product-card.module';
import { PRODUCT_LIST_STORE_KEY } from './constants';
import { ProductListEffects } from './effects';
import { ProductsComponent } from './products.component';
import { productListReducer } from './reducers';
import { ProductListApiService } from './services';

@NgModule({
  imports: [
    CommonModule,
    ProductCardModule,
    MatButtonModule,
    LoaderModule,
    StoreModule.forFeature(PRODUCT_LIST_STORE_KEY, productListReducer),
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      }
    ]),
    EffectsModule.forFeature([
      ProductListEffects
    ])
  ],
  declarations: [
    ProductsComponent
  ],
  providers: [
    ProductListApiService
  ]
})
export class ProductsModule {
}
