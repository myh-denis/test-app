import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductItemModel } from '../../../pages/products/models/product-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() list: IProductItemModel[] = [];
  @Output() clickOrder = new EventEmitter();

  get totalPrice(): number {
    return this.list.reduce((acc, { price }) => acc + price, 0);
  }
}
