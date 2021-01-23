import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/product';

const URL = 'http://localhost:8080/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  //returns all movies as an observable type
  getAll(): Observable<Product[]> {
    return this.http.get(URL + '/') as Observable<Product[]>;
  }

  create(product: Product): Observable<Product> {
    return this.http.post(URL + '/', product) as Observable<Product>;
  }

  getById(id: number): Observable<Product> {
    return this.http.get(URL + '/' + id) as Observable<Product>;
  }

  update(product: Product): Observable<Product> {
    return this.http.put(URL + '/', product) as Observable<Product>;
  }

  delete(id: number): Observable<Product> {
    return this.http.delete(URL + '/' + id) as Observable<Product>;
  }
}
