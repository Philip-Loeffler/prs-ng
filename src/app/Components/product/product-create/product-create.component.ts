import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  title = 'User Create';
  products: Product = new Product();
  submitBtnTitle = 'Create';
  constructor(private productSvc: ProductService, private router: Router) {}

  ngOnInit(): void {}

  save() {
    this.productSvc.create(this.products).subscribe(
      (resp) => {
        this.products = resp as Product;
        console.log('movies', this.products);
        this.router.navigateByUrl('/product-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
