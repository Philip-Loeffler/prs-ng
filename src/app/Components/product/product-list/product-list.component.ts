import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public title: string = 'Product List';
  public product: Product[] = [];

  constructor(private productSvc: ProductService) {}

  ngOnInit(): void {
    this.productSvc.getAll().subscribe(
      (resp) => {
        this.product = resp as Product[];
        console.log('movies', this.product);
      },
      (err) => {
        console.log(err);
      }
    );
    //populate list of movies
  }
}
