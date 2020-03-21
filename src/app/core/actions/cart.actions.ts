import { Action } from '@ngrx/store';
import { IProductItemModel } from '../../pages/products/models/product-item.model';

export enum CartActionsTypes {
  ADD_PRODUCT = '[CART] ADD_PRODUCT',
  EMPTY_CART = '[CART] EMPTY_CART',
  RESET = '[CART] RESET'
}

export class CartAddProduct implements Action {
  readonly type = CartActionsTypes.ADD_PRODUCT;

  constructor(public product: IProductItemModel) {}
}

export class EmptyCart implements Action {
  readonly type = CartActionsTypes.EMPTY_CART;
}

export class CartReset implements Action {
  readonly type = CartActionsTypes.RESET;
}

export type CartAction = CartAddProduct | EmptyCart | CartReset;
