import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../../entity/product";
import {ProductProviderService} from "../../service/product-provider.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = new Product();

  @Input() isNew: boolean = false;
  edit: boolean = this.isNew;

  constructor(
      private productProvider: ProductProviderService
  ) {
  }

  ngOnInit() {
    debugger;

  }

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
  newProduct = () => this.product = new Product();

}
