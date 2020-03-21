import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PictureComponent } from './picture.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PictureComponent
  ],
  exports: [
    PictureComponent
  ]
})
export class PictureModule {
}
