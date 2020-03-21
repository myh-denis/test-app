import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCT_LIST_STORE_KEY } from '../constants';
import { IProductItemModel } from '../models/product-item.model';
import { IAppStateWithProductList, IProductListState } from '../reducers';

export const selectProductListState = createFeatureSelector<IProductListState>(PRODUCT_LIST_STORE_KEY);

export const fromPropertyListState = <T>(projector: (s: IProductListState) => T) =>
  createSelector<IAppStateWithProductList, IProductListState, T>(selectProductListState, projector);

const getLoading = fromPropertyListState<boolean>((state: IProductListState) => state.loading);
const getList = fromPropertyListState<IProductItemModel[]>((state: IProductListState) => state.items);
const getPage = fromPropertyListState<number>((state: IProductListState) => state.page);
const getTotal = fromPropertyListState<number>((state: IProductListState) => state.total);

const selectFromProductList = {
  getLoading,
  getList,
  getPage,
  getTotal
};

export default selectFromProductList;
