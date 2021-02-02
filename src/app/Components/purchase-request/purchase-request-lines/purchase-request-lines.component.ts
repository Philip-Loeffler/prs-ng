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
  requestTitle = 'PurchaseRequest Line Items';
  purchaseRequests: PurchaseRequest = null;
  purchaseRequestsId: number = 0;
  lineItems: LineItem[] = [];
  lineItem: LineItem = new LineItem();

  constructor(
    private lineItemService: LineItemService,
    private requestSvc: PurchaseRequestService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parms) => {
      this.purchaseRequestsId = parms['id'];
      console.log(this.purchaseRequestsId);
    });

    this.requestSvc.getById(this.purchaseRequestsId).subscribe(
      (resp) => {
        this.purchaseRequests = resp as PurchaseRequest;
      },
      (err) => {
        console.log(err);
      }
    );

    this.lineItemService
      .getLineItemsByRequestId(this.purchaseRequestsId)
      .subscribe(
        (resp) => {
          this.lineItems = resp as LineItem[];
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
