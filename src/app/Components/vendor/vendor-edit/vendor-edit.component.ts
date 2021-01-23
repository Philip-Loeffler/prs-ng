import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/Model/vendor';
import { VendorService } from 'src/app/Service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css'],
})
export class VendorEditComponent implements OnInit {
  title: string = 'User edit';
  vendor: Vendor = null;
  vendorId: number = 0;
  submitBtnTitle = 'save';
  //activated route lets us get the id
  constructor(
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.vendorId = params['id']));

    this.vendorService.getById(this.vendorId).subscribe(
      (resp) => {
        this.vendor = resp as Vendor;
        console.log(this.vendor.id);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  save() {
    this.vendorService.update(this.vendor).subscribe(
      (resp) => {
        this.vendor = resp as Vendor;
        console.log('movies', this.vendor);
        this.router.navigateByUrl('/user-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
