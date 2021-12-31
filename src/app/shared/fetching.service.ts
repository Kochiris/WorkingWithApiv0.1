import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../orders-table/orders-table.component';
@Injectable()
export class FetchingService {
  private apiData = new BehaviorSubject<Order[]>(null);
  public apiData$ = this.apiData.asObservable();
  URL: string = 'http://localhost:3000/data';
  constructor(private http: HttpClient) {}

  fetchForOrders() {
    return this.http.get<Order[]>(this.URL);
  }
  setData(data:Order[]) {
    this.apiData.next(data);
  }
}
