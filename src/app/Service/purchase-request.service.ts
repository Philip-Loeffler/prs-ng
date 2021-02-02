import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseRequest } from '../Model/PurchaseRequest';

const URL = 'http://localhost:8080/request';
@Injectable({
  providedIn: 'root',
})
export class PurchaseRequestService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<PurchaseRequest[]> {
    return this.http.get(URL + '/') as Observable<PurchaseRequest[]>;
  }

  create(purchaserequest: PurchaseRequest): Observable<PurchaseRequest> {
    return this.http.post(URL + '/', purchaserequest) as Observable<
      PurchaseRequest
    >;
  }

  getById(id: number): Observable<PurchaseRequest> {
    return this.http.get(URL + '/' + id) as Observable<PurchaseRequest>;
  }

  update(purchaserequest: PurchaseRequest): Observable<PurchaseRequest> {
    return this.http.put(URL + '/', purchaserequest) as Observable<
      PurchaseRequest
    >;
  }

  delete(id: number): Observable<PurchaseRequest> {
    return this.http.delete(URL + '/' + id) as Observable<PurchaseRequest>;
  }

  submitForReview(
    purchaserequest: PurchaseRequest
  ): Observable<PurchaseRequest> {
    return this.http.put(URL + '/submit-review', purchaserequest) as Observable<
      PurchaseRequest
    >;
  }
}
