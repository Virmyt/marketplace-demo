import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ProductProviderService} from "../../service/product-provider.service";
import {Product} from "../../entity/product";
import {Client} from "../../entity/client";

@Component({
    selector: 'app-mobile-app',
    templateUrl: 'mobile-app.component.html',
    styleUrls: ['mobile-app.component.css'],
    providers: []
})
export class MobileAppComponent implements OnInit {
    constructor(private productProvider: ProductProviderService) {
    }

    ngOnInit() {
    }
    client = new Client('John Smith', 'New York');
    selectedPets: string[] = [];
    petsSelected = (pets) => {
        this.selectedPets = pets;
    };

    get availableProducts(): Product[] {
        return this.productProvider.products.filter(
            item => item.petCategories.find(category => this.selectedPets.indexOf(category) !== -1)
        );
    }
}
