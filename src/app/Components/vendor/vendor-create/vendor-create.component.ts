import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/Model/vendor';
import { VendorService } from 'src/app/Service/vendor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css'],
})
export class VendorCreateComponent implements OnInit {
  title = 'Vendor Create';
  vendor: Vendor = new Vendor();
  submitBtnTitle = 'Create';
  constructor(private userSvc: VendorService, private router: Router) {}

  ngOnInit(): void {}

  save() {
    this.userSvc.create(this.vendor).subscribe(
      (resp) => {
        this.vendor = resp as Vendor;
        console.log('movies', this.vendor);
        this.router.navigateByUrl('/vendor-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
