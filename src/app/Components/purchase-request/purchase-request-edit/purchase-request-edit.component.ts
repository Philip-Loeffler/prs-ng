import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from 'src/app/Model/PurchaseRequest';
import { PurchaseRequestService } from 'src/app/Service/purchase-request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase-request-edit',
  templateUrl: './purchase-request-edit.component.html',
  styleUrls: ['./purchase-request-edit.component.css'],
})
export class PurchaseRequestEditComponent implements OnInit {
  title: string = 'Purchase Requests Edit';
  purchaseRequests: PurchaseRequest = null;
  purchaseRequestsId: number = 0;
  submitBtnTitle = 'save';
  //activated route lets us get the id
  constructor(
    private purchaseRequestSvc: PurchaseRequestService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
