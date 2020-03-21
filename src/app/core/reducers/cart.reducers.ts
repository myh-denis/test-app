import { IProductItemModel } from '../../pages/products/models/product-item.model';
import { CartAction, CartActionsTypes } from '../actions/cart.actions';

export interface ICartState {
  products: IProductItemModel[];
}

export const initialState: ICartState = {
  products: []
};

export function cartReducer(
  state: ICartState = initialState,
  action: CartAction
): ICartState {
  switch (action.type) {
    case CartActionsTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product]
      };

    case CartActionsTypes.EMPTY_CART:
      return {
        ...state,
        products: []
      };

    case CartActionsTypes.RESET:
      return {
        ...initialState
      };

    default:
      return state;
  }
}
