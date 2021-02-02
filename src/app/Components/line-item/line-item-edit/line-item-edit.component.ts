import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/Model/lineItem';
import { LineItemService } from 'src/app/Service/lineItem.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css'],
})
export class LineItemEditComponent implements OnInit {
  title = 'Line Items Edit';
  submitBtnTitle = 'save';
  lineItem: LineItem = null;
  lineItemId = 0;

  constructor(
    private lineItemSvc: LineItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.lineItemId = params['id']));

    this.lineItemSvc.getById(this.lineItemId).subscribe(
      (resp) => {
        this.lineItem = resp as LineItem;
        console.log(this.lineItem.id);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  save() {
    this.lineItemSvc.update(this.lineItem).subscribe(
      (resp) => {
        this.lineItem = resp as LineItem;
        this.router.navigateByUrl('/purchase-request-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
