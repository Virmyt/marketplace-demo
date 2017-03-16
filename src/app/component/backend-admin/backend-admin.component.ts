import {Component, OnInit} from '@angular/core';
import {OrderProviderService} from "../../service/order-provider.service";
import {Order} from "../../entity/order";

@Component({
    selector: 'app-backend-admin',
    templateUrl: 'backend-admin.component.html',
    styleUrls: ['backend-admin.component.css']
})
export class BackendAdminComponent implements OnInit {

    constructor(private orderProvider: OrderProviderService) {
    }

    ngOnInit() {
    }

    get getOrders(): Order[] {
        return this.orderProvider.orders;
    }

    get getSum(): number  {
        let result = 0;
        this.orderProvider.orders.forEach((val) => result += val.product.price );
        return result;
    }
}
