import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../../entity/product";
import {Order} from "../../entity/order";
import {ProductProviderService} from "../../service/product-provider.service";
import {OrderProviderService} from "../../service/order-provider.service";
import {Client} from "../../entity/client";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: []
})
export class ProductComponent implements OnInit {

  @Input() product: Product = new Product();
  @Input() client: Client = null;

  @Input() isNew: boolean = false;
  edit: boolean = this.isNew;

  constructor(
      private orderProvider: OrderProviderService,
      private productProvider: ProductProviderService
  ) {
  }

  ngOnInit() {

  }

  petsSelected = (pets) => {
    this.product.petCategories = pets;
  };

  editProduct = (product: Product) => {
    this.product = product;
    this.edit = true;
  };
  saveProduct = (product: Product) => {
    this.product = product;
    this.productProvider.saveProduct(product);
    this.edit = false
  };

  getTypes = (): string[] => this.productProvider.types;

  getImages = () => this.productProvider.getImages();
  buyProduct = (product: Product) => this.orderProvider.addNewOrder(new Order(this.product, this.client))
}
