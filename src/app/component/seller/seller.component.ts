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

  tabs = ['Your products', 'Delivery area'];
  activeTab: string = this.tabs[0];
  constructor(
      private productProvider: ProductProviderService
  ) { }

  ngOnInit() {
  }

  getProducts = (): Product[] => this.productProvider.products;


  selectProduct = (product: Product) => {
    this.product = product;
    this.edit = false;
  };
  addProduct = () => {
    this.edit = true;
    this.product = new Product();
  };

  newProduct = () => this.product = new Product();
}
