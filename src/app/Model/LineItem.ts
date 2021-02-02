import { PurchaseRequest } from 'src/app/Model/PurchaseRequest';
import { Product } from 'src/app/Model/product';

export class LineItem {
  id: number;
  purchaseRequest: PurchaseRequest;
  product: Product;
  quantity: number;

  constructor(
    id: number = 0,
    purchaseRequest: PurchaseRequest = null,
    product: Product = null,
    quantity: number = 0
  ) {
    this.id = id;
    this.purchaseRequest = purchaseRequest;
    this.product = product;
    this.quantity = quantity;
  }
}
