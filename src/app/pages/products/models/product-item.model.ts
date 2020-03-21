import { IImagesModel } from '../../../models/images.model';

export interface IProductItemModel {
  id: string;
  name: string;
  description: string;
  images: IImagesModel;
  image: string;
  price: number;
}
