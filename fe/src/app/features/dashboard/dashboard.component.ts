import { Component, OnInit } from '@angular/core';
import { EventsStore } from '../../core/store/events.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private store: EventsStore) {}

  ngOnInit(): void {
    this.store.loadPage();
    this.store.getAllEvents();
  }

  onFiltersChange(filters: any) {
    this.store.setFilters(filters);
  }
}
