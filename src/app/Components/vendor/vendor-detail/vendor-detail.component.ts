import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/Model/vendor';
import { VendorService } from 'src/app/Service/vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css'],
})
export class VendorDetailComponent implements OnInit {
  title: string = 'Vendor Details';
  vendor: Vendor = null;
  vendorId: number = 0;
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
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete() {
    this.vendorService.delete(this.vendor.id).subscribe(
      (resp) => {
        this.vendor = resp as Vendor;
        this.router.navigateByUrl('/vendor-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
