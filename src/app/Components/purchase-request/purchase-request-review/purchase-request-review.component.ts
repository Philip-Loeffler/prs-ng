import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from 'src/app/Service/purchase-request.service';
import { SystemService } from 'src/app/Service/system.service';
import { PurchaseRequest } from 'src/app/Model/PurchaseRequest';

@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchase-request-review.component.html',
  styleUrls: ['./purchase-request-review.component.css'],
})
export class PurchaseRequestReviewComponent implements OnInit {
  purchaseRequests: PurchaseRequest[];
  constructor(
    private purchaseRequestSvc: PurchaseRequestService,
    private systemService: SystemService
  ) {}

  ngOnInit(): void {
    this.systemService.checkLogin();

    this.purchaseRequestSvc
      .review(this.systemService.loggedInUser.id)
      .subscribe(
        (resp) => {
          this.purchaseRequests = resp as PurchaseRequest[];
          console.log(this.purchaseRequests);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
