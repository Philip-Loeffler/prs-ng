import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from 'src/app/Model/PurchaseRequest';
import { LineItem } from 'src/app/Model/lineItem';
import { PurchaseRequestService } from 'src/app/Service/purchase-request.service';
import { LineItemService } from 'src/app/Service/lineItem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/Service/system.service';
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
  reviewButton: string = 'submit to review';

  constructor(
    private lineItemService: LineItemService,
    private purchaseRequestService: PurchaseRequestService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sysSvc.checkLogin();

    this.route.params.subscribe((parms) => {
      this.purchaseRequestsId = parms['id'];
      console.log(this.purchaseRequestsId);
    });

    this.purchaseRequestService.getById(this.purchaseRequestsId).subscribe(
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

  public submitForReview() {
    this.purchaseRequestService
      .submitForReview(this.purchaseRequests)
      .subscribe(
        (resp) => {
          this.purchaseRequests = resp as PurchaseRequest;
          this.router.navigateByUrl('/purchase-request-list');
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
