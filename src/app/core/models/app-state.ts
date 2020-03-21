import { CART_STORE_KEY } from '../constants';
import { ICartState } from '../reducers/cart.reducers';

export interface IAppState {
  [CART_STORE_KEY]: ICartState;
}
