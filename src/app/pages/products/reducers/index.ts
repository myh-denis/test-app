import { IAppState } from '../../../core/models/app-state';
import { getPaginationMock, IPagination } from '../../../models/pagination.model';
import { ProductListAction, ProductListActionsTypes } from '../actions';
import { PRODUCT_LIST_STORE_KEY } from '../constants';
import { IProductItemModel } from '../models/product-item.model';

export interface IProductListState extends IPagination<IProductItemModel> {
  loading: boolean;
}

export const initialState: IProductListState = {
  loading: false,
  ...getPaginationMock<IProductItemModel>([])
};

export interface IAppStateWithProductList extends IAppState {
  [PRODUCT_LIST_STORE_KEY]: IProductListState;
}

export function productListReducer(
  state: IProductListState = initialState,
  action: ProductListAction
): IProductListState {
  switch (action.type) {
    case ProductListActionsTypes.FETCH_DATA:
    case ProductListActionsTypes.DATA_FAILURE:
      return {
        ...state,
        loading: action.type === ProductListActionsTypes.FETCH_DATA
      };

    case ProductListActionsTypes.SET_DATA:
      return {
        ...state,
        ...action.list,
        items: [...state.items, ...action.list.items],
        loading: false
      };

    case ProductListActionsTypes.RESET:
      return {
        ...initialState
      };

    default:
      return state;
  }
}
