import {
  Component,
  OnDestroy,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { map } from 'rxjs';
import Chart from 'chart.js/auto';
import { EventsStore } from 'src/app/core/store/events.store';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements AfterViewInit, OnDestroy {
  events$ = this.store.eventsAll$;
  @ViewChild('pieCanvas') pieCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(public store: EventsStore) {}

  private chart!: Chart;

  ngAfterViewInit(): void {
    this.events$
      .pipe(
        map((events) => ({
          error: events.filter((e) => e.level === 'ERROR').length,
          warn: events.filter((e) => e.level === 'WARN').length,
          info: events.filter((e) => e.level === 'INFO').length,
        }))
      )
      .subscribe((summary) => {
        this.renderChart(summary);
      });
  }

  private renderChart(data: { error: number; warn: number; info: number }) {
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['ERROR', 'WARN', 'INFO'],
        datasets: [
          {
            data: [data.error, data.warn, data.info],
            backgroundColor: ['#e53935', '#fb8c00', '#43a047'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
        },
      },
    });
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
