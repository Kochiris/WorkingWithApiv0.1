import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}
}
