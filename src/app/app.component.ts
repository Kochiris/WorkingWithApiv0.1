import { Component, OnInit } from '@angular/core';
import { Order } from './orders-table/orders-table.component';
import { FetchingService } from './shared/fetching.service';

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FetchingService],
})
export class AppComponent implements OnInit {
  data: Order[];

  constructor(private fetchService: FetchingService) {
  }

  ngOnInit() {
    this.fetchService.fetchForOrders().subscribe((data) => {
      this.data = data;
      this.fetchService.setData(data);
    });
  }
}
