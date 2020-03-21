import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductItemModel } from '../../pages/products/models/product-item.model';
import { CART_STORE_KEY } from '../constants';
import { IAppState } from '../models/app-state';
import { ICartState } from '../reducers/cart.reducers';

export const selectCartState = createFeatureSelector<ICartState>(CART_STORE_KEY);

export const fromCartState = <T>(projector: (s: ICartState) => T) =>
  createSelector<IAppState, ICartState, T>(selectCartState, projector);

const getProducts = fromCartState<IProductItemModel[]>((state: ICartState) => state.products);

const selectFromCart = {
  getProducts
};

export default selectFromCart;
