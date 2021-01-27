import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Service/product.service';
import { Vendor } from 'src/app/Model/vendor';
import { VendorService } from 'src/app/Service/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  title = 'Product Create';
  products: Product = new Product();
  vendors: Vendor[] = [];
  submitBtnTitle = 'Create';
  constructor(
    private vendorSvc: VendorService,
    private productSvc: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vendorSvc.getAll().subscribe(
      (resp) => {
        this.vendors = resp as Vendor[];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  save() {
    this.productSvc.create(this.products).subscribe(
      (resp) => {
        this.products = resp as Product;
        console.log(this.products);
        this.router.navigateByUrl('/product-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
