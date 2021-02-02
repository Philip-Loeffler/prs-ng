import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  title: string = 'Product detail';
  product: Product = null;
  productId: number = 0;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.productId = params['id']));

    this.productService.getById(this.productId).subscribe(
      (resp) => {
        this.product = resp as Product;
        console.log(this.product.id);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete() {
    this.productService.delete(this.product.id).subscribe(
      (resp) => {
        this.product = resp as Product;
        this.router.navigateByUrl('/product-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
