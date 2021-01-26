import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from 'src/app/Model/PurchaseRequest';
import { PurchaseRequestService } from 'src/app/Service/purchase-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css'],
})
export class PurchaseRequestCreateComponent implements OnInit {
  title = 'User Create';
  PurchaseRequests: PurchaseRequest = new PurchaseRequest();
  submitBtnTitle = 'Create';
  constructor(
    private purchaseRequestSvc: PurchaseRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  save() {
    this.purchaseRequestSvc.create(this.PurchaseRequests).subscribe(
      (resp) => {
        this.PurchaseRequests = resp as PurchaseRequest;
        console.log('movies', this.PurchaseRequests);
        this.router.navigateByUrl('/product-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
