import { Component, OnInit } from '@angular/core';
import {ProductProviderService} from "../../service/product-provider.service";
import {RegionProviderService} from "../../service/region-provider.service";
import {Product} from "../../entity/product";
import {Region} from "../../entity/region";

@Component({
  selector: 'app-seller',
  templateUrl: 'seller.component.html',
  styleUrls: ['seller.component.css'],
  providers: [RegionProviderService]
})
export class SellerComponent implements OnInit {

  product: Product = null;
  region: Region = null;
  edit: boolean = false;
  editRegion: boolean = false;

  tabs = ['Your products', 'Delivery area'];
  activeTab: string = this.tabs[0];
  constructor(
      private productProvider: ProductProviderService,
      private regionProvider: RegionProviderService
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

  addRegion = () => {
    this.editRegion = true;
  };
  getRegions = (): Region[] => this.regionProvider.getRegions();
  selectRegion = (region: Region) => {
    this.region = region;
  }
}
