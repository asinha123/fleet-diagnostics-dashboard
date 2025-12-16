import { Component } from '@angular/core';
import { EventsStore } from '../../core/store/events.store';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss'],
})
export class EventsTableComponent {
  events$ = this.store.events$;

  constructor(public store: EventsStore) {}

  next() {
    this.store.nextPage();
  }

  prev() {
    this.store.prevPage();
  }
}
