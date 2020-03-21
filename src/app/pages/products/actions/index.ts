import { Action } from '@ngrx/store';
import { FIRST_PAGE } from '../../../constants/default-values.const';
import { IPagination } from '../../../models/pagination.model';
import { IProductItemModel } from '../models/product-item.model';

export enum ProductListActionsTypes {
  FETCH_DATA = '[PRODUCT_LIST] FETCH_DATA',
  SET_DATA = '[PRODUCT_LIST] SET_DATA',
  DATA_FAILURE = '[PRODUCT_LIST] DATA_FAILURE',
  RESET = '[PRODUCT_LIST] RESET'
}

export class FetchProductListData implements Action {
  readonly type = ProductListActionsTypes.FETCH_DATA;

  constructor(public page: number = FIRST_PAGE) {}
}

export class SetProductListData implements Action {
  readonly type = ProductListActionsTypes.SET_DATA;

  constructor(public list: IPagination<IProductItemModel>) {}
}

export class ProductListDataFailure implements Action {
  readonly type = ProductListActionsTypes.DATA_FAILURE;
}

export class ResetProductList implements Action {
  readonly type = ProductListActionsTypes.RESET;
}

export type ProductListAction =
  FetchProductListData
  | SetProductListData
  | ProductListDataFailure
  | ResetProductList;
