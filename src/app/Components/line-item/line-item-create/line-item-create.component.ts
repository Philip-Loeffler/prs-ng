import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/Model/lineItem';
import { LineItemService } from 'src/app/Service/lineItem.service';
import { Product } from 'src/app/Model/product';
import { PurchaseRequest } from 'src/app/Model/PurchaseRequest';
import { ProductService } from 'src/app/Service/product.service';
import { PurchaseRequestService } from 'src/app/Service/purchase-request.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css'],
})
export class LineItemCreateComponent implements OnInit {
  title = 'PurchaseRequest Line Items Create';
  submitBtnTitle = 'Create';
  products: Product[] = [];
  lineItem: LineItem = new LineItem();
  purchaseRequests: PurchaseRequest = new PurchaseRequest();
  requestId = 0;

  constructor(
    private lineItemSvc: LineItemService,
    private productSvc: ProductService,
    private requestSvc: PurchaseRequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parms) => {
      this.requestId = parms['id'];
      console.log(this.requestId);
    });

    this.requestSvc.getById(this.requestId).subscribe(
      (resp) => {
        this.purchaseRequests = resp as PurchaseRequest;
      },
      (err) => {}
    );

    this.productSvc.getAll().subscribe(
      (resp) => {
        this.products = resp as Product[];
      },
      (err) => {}
    );
  }

  save() {
    this.lineItem.purchaseRequest = this.purchaseRequests;
    this.lineItemSvc.create(this.lineItem).subscribe(
      (resp) => {
        this.lineItem = resp as LineItem;
        this.router.navigateByUrl('/purchase-request-lines/' + this.requestId);
      },
      (err) => {}
    );
  }
}
