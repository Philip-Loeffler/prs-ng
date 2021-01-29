import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from 'src/app/Model/PurchaseRequest';
import { LineItem } from 'src/app/Model/lineItem';
import { PurchaseRequestService } from 'src/app/Service/purchase-request.service';
import { LineItemService } from 'src/app/Service/lineItem.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-purchase-request-lines',
  templateUrl: './purchase-request-lines.component.html',
  styleUrls: ['./purchase-request-lines.component.css'],
})
export class PurchaseRequestLinesComponent implements OnInit {
  title: string = 'Purchase Requests Line Items';
  purchaseRequests: PurchaseRequest = null;
  lineItems: LineItem[];

  purchaseRequestsId: number = 0;
  submitBtnTitle = 'save';
  //activated route lets us get the id
  constructor(
    private lineItemSvc: LineItemService,
    private purchaseRequestSvc: PurchaseRequestService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.lineItemSvc.getAll().subscribe(
      (resp) => {
        this.lineItems = resp as LineItem[];
        console.log('lineitem', this.lineItems);
      },
      (err) => {
        console.log(err);
      }
    );
    //populate list of movies

    this.route.params.subscribe(
      (params) => (this.purchaseRequestsId = params['id'])
    );
    this.purchaseRequestSvc.getById(this.purchaseRequestsId).subscribe(
      (resp) => {
        this.purchaseRequests = resp as PurchaseRequest;
        console.log(this.purchaseRequests.id);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  save() {
    this.purchaseRequestSvc.update(this.purchaseRequests).subscribe(
      (resp) => {
        this.purchaseRequests = resp as PurchaseRequest;
        console.log('movies', this.purchaseRequests);
        this.router.navigateByUrl('/product-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
