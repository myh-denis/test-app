import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductItemModel } from '../../pages/products/models/product-item.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() item: IProductItemModel;
  @Output() clickButton = new EventEmitter();
}
