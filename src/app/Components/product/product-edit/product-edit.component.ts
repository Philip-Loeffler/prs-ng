import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  title: string = 'Product edit';
  product: Product = null;
  productId: number = 0;
  submitBtnTitle = 'save';
  //activated route lets us get the id
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
  save() {
    this.productService.update(this.product).subscribe(
      (resp) => {
        this.product = resp as Product;
        console.log('movies', this.product);
        this.router.navigateByUrl('/user-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
