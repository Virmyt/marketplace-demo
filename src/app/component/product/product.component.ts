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
  @Input() edit: boolean = false;

  constructor(
      private productProvider: ProductProviderService
  ) { }

  ngOnInit() {
  }

  editProduct = (name: string) => {
    this.product = this.productProvider.products.find((product: Product) => product.name === name);
  };

  newProduct = () => this.product = new Product();

}
