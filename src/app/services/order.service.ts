import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderType} from "../types/order.type";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }


  createOrder(data: OrderType) {
    return this.http.post<{ success: boolean}>('https://testologia.ru/order-tea', data);
  }
}
