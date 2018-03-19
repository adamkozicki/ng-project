import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,ReactiveFormsModule  } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-inventory-date-range',
  template: `
    <form [formGroup]="dateForm">
      <div class="input-group">
        <input type="text" formControlName="dayBack" class="form-control" [(ngModel)] = "dayBack" placeholder="Dni wstecz">
        <input type="text" formControlName="dayFront" class="form-control" [(ngModel)] = "dayFront" placeholder="Dni w przód">
      </div>
    </form>
  `,
  styles: []
})
export class InventoryDateRangeComponent implements OnInit {
  
  @Input()
  dates = []

  dayBack = 10
  dayFront = 10

  @Output()
  changeDates = new EventEmitter();
  
  changeDatesOut() {
    this.dates = this.getDates()
    this.changeDates.emit(this.dates)
  }

  getDates() {
    let dates = [];

    let prevDate = moment().subtract(this.dayBack, 'days').format('MM-DD-YYYY');
    let nextDate = moment().add(this.dayFront, 'days').format('MM-DD-YYYY');

    let start = new Date(prevDate);
    let end = new Date(nextDate);

    while (start < end) {
      dates.push(moment(start).format('DD-MM-YY dddd'));
      var newDate = start.setDate(start.getDate() + 1);
      start = new Date(newDate);
    }
    this.dates = dates;
    return this.dates
    
  }

  dateForm: FormGroup

  constructor() {
    this.dateForm = new FormGroup({
      'dayBack': new FormControl(''),
      'dayFront': new FormControl('')
    })
    this.dateForm.get('dayBack').valueChanges
      .distinctUntilChanged()
      .debounceTime(400)
      .subscribe(dayBack => {
        this.dayBack = dayBack
        this.changeDatesOut()
      })

    this.dateForm.get('dayFront').valueChanges
      .distinctUntilChanged()
      .debounceTime(400)
      .subscribe(dayFront => {
        this.dayFront = dayFront
        this.changeDatesOut()
      })
  }

  ngOnInit() {
  }

}
