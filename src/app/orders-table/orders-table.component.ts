import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { FetchingService } from '../shared/fetching.service';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('100ms', [
            animate(
              '0.5s ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateY(-75px)',
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(10px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
              ])
            ),
          ])
        ),
      ]),
    ]),
  ],
})
export class OrdersTableComponent implements OnInit {
  error = null;

  isFetching: boolean = false;
  option: string;
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  loadedData: Order[];
  dataSource: MatTableDataSource<Order>;
  displayedColumns: string[] = [
    'work_order_id',
    'description',
    'received_date',
    'assigned_to',
    'status',
    'priority',
  ];

  constructor(private fetchingService: FetchingService) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.onFetchData();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onFetchData() {
    this.isFetching = true;

    this.fetchingService.fetchForOrders().subscribe({

      next: (data) => {
        this.loadedData = data;
        data.forEach((order) => this.options.push(order.description));
        this.dataSource = new MatTableDataSource<Order>(this.loadedData);
        this.fetchingService.setData(data);
        this.isFetching = false;
      },
      error:(error) => {
        this.isFetching = false;
        this.error = error;
        console.log(error);
      },
      complete: ()=>console.log('complete')
    }
    );
  }
}
