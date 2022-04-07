import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { ProductModelServer, serverResponse} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = environment.SERVER_URL;

  constructor(private http: HttpClient) { };

  // lấy 8 loại sản phẩm đầu trong database
  getAllProducts(limitOfResults=8): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString()
      }
    }).pipe();
  }
  // lấy tất cả sản phẩm ở trang sản phẩm
  getAllInPageProducts(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'products');
  }
  // lấy tất cả sản phẩm ở trang sản phẩm
  getAllTypeOfProducts(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'productOfType');
  }
  //lấy 1 sản phẩm từ database
  getSingleProduct(masp: Number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.url + 'products/' + masp);
  }
  //lấy sản phẩm theo Mã loại sản phẩm
  getProductsFromType(tenloaisp: String): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'products/loaisp/' + tenloaisp);
  }
}
