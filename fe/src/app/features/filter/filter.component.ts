import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  filtersForm = this.fb.group({
    vehicleId: [''],
    code: [''],
    level: [''],
    from: [''],
    to: [''],
  });

  constructor(private fb: FormBuilder) {}

  apply() {
    this.filtersChanged.emit(this.filtersForm.value);
  }

  reset() {
    this.filtersForm.reset();
    this.apply();
  }
}
