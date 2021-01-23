import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/Model/vendor';
import { VendorService } from 'src/app/Service/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css'],
})
export class VendorListComponent implements OnInit {
  public title: string = 'Vendor List';
  public vendor: Vendor[] = [];

  constructor(private userSvc: VendorService) {}

  ngOnInit(): void {
    this.userSvc.getAll().subscribe(
      (resp) => {
        this.vendor = resp as Vendor[];
      },
      (err) => {
        console.log(err);
      }
    );
    //populate list of movies
  }
}
