import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { FilterComponent } from './features/filter/filter.component';
import { SummaryComponent } from './features/summary/summary.component';
import { EventsTableComponent } from './features/events-table/events-table.component';

@NgModule({
  // declarations: [AppComponent, DashboardComponent, FilterComponent],
  declarations: [
    AppComponent,
    DashboardComponent,
    FilterComponent,
    SummaryComponent,
    EventsTableComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
