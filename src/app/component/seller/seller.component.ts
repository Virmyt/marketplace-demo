import { Component, OnInit } from '@angular/core';
import {ProductProviderService} from "../../service/product-provider.service";
import {Product} from "../../entity/product";

@Component({
  selector: 'app-seller',
  templateUrl: 'seller.component.html',
  styleUrls: ['seller.component.css'],
  providers: [ProductProviderService]
})
export class SellerComponent implements OnInit {

  product: Product = null;
  edit: boolean = false;
  constructor(
      private productProvider: ProductProviderService
  ) { }

  ngOnInit() {
  }

  getProducts = (): Product[] => this.productProvider.products;


  selectProduct = (product: Product) => {
    this.product = product;
  };
  addProduct = () => {
    this.product = new Product();
    this.edit = true;
  };

  editProduct = (product: Product) => {
    // this.product = this.productProvider.products.find((product: Product) => product.name === name);
    this.product = product;
    this.edit = true;
  };

  newProduct = () => this.product = new Product();
}
