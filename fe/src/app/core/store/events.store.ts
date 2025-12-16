import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventsApiService } from '../services/events-api.service';

@Injectable({ providedIn: 'root' })
export class EventsStore {
  private eventsSubject = new BehaviorSubject<any[]>([]);
  private eventsAllSubject = new BehaviorSubject<any[]>([]);

  events$ = this.eventsSubject.asObservable();
  eventsAll$ = this.eventsAllSubject.asObservable();

  private filters: any = {};
  private page = 0;
  private readonly pageSize = 7;

  constructor(private api: EventsApiService) {}

  setFilters(filters: any) {
    this.filters = filters;
    this.page = 0;
    this.loadPage();
  }

  loadPage(page: number = this.page) {
    this.page = page;
    const offset = page * this.pageSize;

    this.api
      .getEvents(this.filters, this.pageSize, offset)
      .subscribe((events) => {
        events = events.map((ev) => ({ ...ev, vehicleId: ev.vehicle_id }));
        this.eventsSubject.next(events);
      });
  }

  getAllEvents() {
    this.api.getEvents({}, undefined).subscribe((events) => {
      this.eventsAllSubject.next(events);
    });
  }

  nextPage() {
    this.loadPage(this.page + 1);
  }

  prevPage() {
    if (this.page > 0) {
      this.loadPage(this.page - 1);
    }
  }

  get currentPage() {
    return this.page;
  }
}
