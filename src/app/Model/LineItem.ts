import { Request } from 'src/app/Model/Request';
import { Product } from 'src/app/Model/Product';

export class LineItem {
  id: number;
  request: Request;
  product: Product;
  quantity: number;

  constructor(id = 0, request: Request, product: Product, quantity = 0) {
    this.id = id;
    this.request = request;
    this.product = product;
    this.quantity = quantity;
  }
}
