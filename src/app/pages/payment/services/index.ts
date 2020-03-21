import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_ROOT } from '../../../constants/api-root.const';
import { IApiResponseModel } from '../../../models/api-response.model';
import { IProductItemModel } from '../../products/models/product-item.model';
import { IFormModel } from '../models/form.model';

@Injectable()
export class PaymentApiService {
  constructor(
    @Inject(API_ROOT) private _API_ROOT: string,
    private http: HttpClient) {
  }

  sendOrder(productList: IProductItemModel[], paymentInfo: IFormModel) {
    const products = productList.map(({ id }) => id);

    return this.http.post<IApiResponseModel>(`${this._API_ROOT}products/buy`, { products, paymentInfo });
  }
}
