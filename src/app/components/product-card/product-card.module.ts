import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PictureModule } from '../picture/picture.module';
import { ProductCardComponent } from './product-card.component';

@NgModule({
  imports: [
    CommonModule,
    PictureModule,
    MatButtonModule
  ],
  declarations: [
    ProductCardComponent
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule {
}
