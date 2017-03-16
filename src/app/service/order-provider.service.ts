import { Injectable } from '@angular/core';
import {Order} from "../entity/order";

@Injectable()
export class OrderProviderService {

  orders: Order[] = [];
  constructor() { }
  addNewOrder = (order: Order) => {

    this.orders.push(order.setOrderId(this.orders.length.valueOf()+1));

  }
}
