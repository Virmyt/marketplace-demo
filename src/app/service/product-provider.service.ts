import { Injectable } from '@angular/core';
import * as _ from "lodash";
import {Product} from '../entity/product'

@Injectable()
export class ProductProviderService {
  types = ['food', 'inventroy', 'health'];

  products: Product[] = [
    new Product('Food 1', 'food', 10, 'tmp'),
    new Product('Food 2', 'food', 15, 'tmp'),
    new Product('House', 'inventory', 90, 'tmp'),
    new Product('Game', 'inventory', 20, 'tmp'),
    new Product('Vitamin', 'health', 60, 'tmp'),
  ];
  constructor() { }

  addProduct = (product: Product) => {
    if (-1 !== _.findIndex(this.types, product.type)) {
      this.products.push(product);
    }
  }
}
