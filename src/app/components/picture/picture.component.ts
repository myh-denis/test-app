import { Component, Input } from '@angular/core';
import { IImagesModel } from '../../models/images.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent {
  @Input() src: string;
  @Input() alt?: string;
  @Input() images?: IImagesModel;
}
