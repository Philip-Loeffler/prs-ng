import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineItem } from '../Model/lineItem';

const URL = 'http://localhost:8080/lineItem';
@Injectable({
  providedIn: 'root',
})
export class LineItemService {
  constructor(private http: HttpClient) {}

  //returns all movies as an observable type
  getAll(): Observable<LineItem[]> {
    return this.http.get(URL + '/') as Observable<LineItem[]>;
  }

  create(lineItem: LineItem): Observable<LineItem> {
    return this.http.post(URL + '/', lineItem) as Observable<LineItem>;
  }

  getById(id: number): Observable<LineItem> {
    return this.http.get(URL + '/' + id) as Observable<LineItem>;
  }

  update(lineItem: LineItem): Observable<LineItem> {
    return this.http.put(URL + '/', lineItem) as Observable<LineItem>;
  }

  delete(id: number): Observable<LineItem> {
    return this.http.delete(URL + '/' + id) as Observable<LineItem>;
  }
  getLineItemsByRequestId(id: number): Observable<LineItem[]> {
    return this.http.get(URL + '/line-item-for-pr/' + id) as Observable<
      LineItem[]
    >;
  }
}
