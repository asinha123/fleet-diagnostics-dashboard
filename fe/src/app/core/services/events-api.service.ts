import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnosticEvent } from '../models/event.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class EventsApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getEvents(
    filters: any,
    limit: number | undefined,
    offset = 0
  ): Observable<DiagnosticEvent[]> {
    let params =
      limit !== undefined
        ? new HttpParams().set('limit', limit).set('offset', offset)
        : new HttpParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (key === 'vehicleId') key = 'vehicle_id';
      if (value) params = params.set(key, value as string);
    });

    return this.http.get<DiagnosticEvent[]>(`${this.baseUrl}/events`, {
      params,
    });
  }
}
