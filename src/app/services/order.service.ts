import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  products: ProductResponseModel[] = [];

  private serverUrl = environment.SERVER_URL;

  constructor(private http: HttpClient) {}


  getSingleOrder(orderId: Number) {
    return this.http.get<ProductResponseModel[]>(`${this.serverUrl}hoadon/${orderId}`).toPromise();
  }
}


interface ProductResponseModel{
  masp: number;
  tensanpham: string;
  dongia: number;
  hinhanh: string;
  mota: string;
  soluongdat: Number;
}
