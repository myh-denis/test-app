import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FetchProductListData, ProductListActionsTypes, ProductListDataFailure, SetProductListData } from '../actions';
import { ProductListApiService } from '../services';

@Injectable()
export class ProductListEffects {
  constructor(
    private actions: Actions,
    private productListService: ProductListApiService) {
  }

  @Effect()
  propertiesShowMore = this.actions.pipe(
    ofType(ProductListActionsTypes.FETCH_DATA),
    mergeMap((action: FetchProductListData) => {
      return this.productListService.getList(action.page).pipe(
        map(res => {
          return new SetProductListData(res);
        }),
        catchError(() => {
          return of(new ProductListDataFailure());
        })
      );
    })
  );
}
