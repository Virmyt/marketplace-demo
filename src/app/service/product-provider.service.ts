import { Injectable } from '@angular/core';
import * as _ from "lodash";
import {Product} from '../entity/product'

@Injectable()
export class ProductProviderService {
  types = ['food', 'inventroy', 'health'];

  private imageNames = ['dogVitamin1', 'food', 'food2', 'house', 'house2', 'house3', 'toy1', 'toy2', 'toy3', 'vitamin1'];

  products: Product[] = [
    new Product('Food 1', 'food', 11.99, '/assets/images/products/food.jpg', ['cat']),
    new Product('Food 2', 'food', 15.99, '/assets/images/products/food2.jpg'),
    new Product('House', 'inventory', 90.99, '/assets/images/products/house.jpg'),
    new Product('Game', 'inventory', 20.99, '/assets/images/products/toy1.jpg'),
    new Product('Vitamin', 'health', 60.99, '/assets/images/products/vitamin1.jpg'),
  ];
  constructor() { }

  saveProduct = (product: Product) => {
    if (-1 !== this.types.findIndex(item => item == product.type)) {
      let index = this.products.findIndex((item) => item.name === product.name);
      (-1 !== index) ? (this.products[index] = product) : this.products.push(product);
    }
  };
  getImages = () => this.imageNames.map(imageName => '/assets/images/products/' + imageName + '.jpg');

}
