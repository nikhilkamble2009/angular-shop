import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  appUrl: string = 'http://localhost:4000';
  products: Product[];
  constructor(private _http: HttpClient) { }



  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.appUrl + "/products")
  }
}
