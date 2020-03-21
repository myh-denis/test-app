import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_ROOT } from '../../../constants/api-root.const';
import { IPagination } from '../../../models/pagination.model';
import { IProductItemModel } from '../models/product-item.model';

@Injectable()
export class ProductListApiService {
  constructor(
    @Inject(API_ROOT) private _API_ROOT: string,
    private http: HttpClient) {
  }

  getList(page: number) {
    return this.http.get<IPagination<IProductItemModel>>(`${this._API_ROOT}products/list?page=${page}`);
  }
}
