import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from 'src/app/Model/vendor';

const URL = 'http://localhost:8080/vendor';
@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private http: HttpClient) {}

  //returns all movies as an observable type
  getAll(): Observable<Vendor[]> {
    return this.http.get(URL + '/') as Observable<Vendor[]>;
  }

  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(URL + '/', vendor) as Observable<Vendor>;
  }

  getById(id: number): Observable<Vendor> {
    return this.http.get(URL + '/' + id) as Observable<Vendor>;
  }

  update(vendor: Vendor): Observable<Vendor> {
    return this.http.put(URL + '/', vendor) as Observable<Vendor>;
  }

  delete(id: number): Observable<Vendor> {
    return this.http.delete(URL + '/' + id) as Observable<Vendor>;
  }
}
