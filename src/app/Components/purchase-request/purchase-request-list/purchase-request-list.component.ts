import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from 'src/app/Model/PurchaseRequest';
import { PurchaseRequestService } from 'src/app/Service/purchase-request.service';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css'],
})
export class PurchaseRequestListComponent implements OnInit {
  public title: string = 'Purchase Request List';
  public purchaseRequests: PurchaseRequest[] = [];

  constructor(private PurchaseRequestSvc: PurchaseRequestService) {}

  ngOnInit(): void {
    this.PurchaseRequestSvc.getAll().subscribe(
      (resp) => {
        this.purchaseRequests = resp as PurchaseRequest[];
        console.log(this.purchaseRequests);
      },
      (err) => {
        console.log(err);
      }
    );
    //populate list of movies
  }
}
