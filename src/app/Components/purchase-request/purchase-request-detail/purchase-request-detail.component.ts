import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from 'src/app/Model/PurchaseRequest';
import { PurchaseRequestService } from 'src/app/Service/purchase-request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css'],
})
export class PurchaseRequestDetailComponent implements OnInit {
  title: string = 'Purchase Request Details';
  purchaseRequests: PurchaseRequest = null;
  purchaseRequestId: number = 0;
  constructor(
    private purchaseRequestSvc: PurchaseRequestService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => (this.purchaseRequestId = params['id'])
    );

    this.purchaseRequestSvc.getById(this.purchaseRequestId).subscribe(
      (resp) => {
        this.purchaseRequests = resp as PurchaseRequest;
        console.log(this.purchaseRequests.id);
        console.log('movies', this.purchaseRequests);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete() {
    this.purchaseRequestSvc.delete(this.purchaseRequests.id).subscribe(
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
