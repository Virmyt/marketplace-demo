import {Product} from "./product";
import {Client} from "./client";
export class Order {
    constructor(product: Product, client: Client) {
        this.product = product;
        this.client = client;

    }
    product: Product;
    client: Client;
    orderId: number;

    setOrderId = (id) => {
        this.orderId = id;

        return this;
    }
}
