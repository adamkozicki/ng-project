import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { InventoryService } from './inventory.service';
import * as moment from 'moment';

@Component({
  selector: 'app-inventory-date-range',
  template: `
    <form [formGroup]="dateForm" class="needs-validation">
      <div class="form-row row">
        <div class="col-md-2 mb-3">
          <label for="dayBack">
            <button type="button" class="btn btn-info btn-sm">
            Dni wstecz <span class="badge badge-light">{{dayBack}}</span>
          </button>
          </label>
          <div class="input-group">
            <div class="slidecontainer">
              <input type="range" class="form-control slider reverse" formControlName="dayBack" id="dayBack" min="0" max="100" [(ngModel)] = "dayBack">
            </div>
          </div>
        </div>
        <div class="col-md-2 mb-3">
            <label for="dayFront">
            <button type="button" class="btn btn-info btn-sm">
            Dni wprzód <span class="badge badge-light">{{dayFront}}</span>
          </button>
          </label>
          <div class="input-group">
            <div class="slidecontainer">
              <input type="range" class="form-control slider" formControlName="dayFront" id="dayFront" min="0" max="100" [(ngModel)] = "dayFront">
            </div>
          </div>
        </div>
      </div>  
    </form>
  `,
  styleUrls: ['./inventory-date-range.component.css']

})
export class InventoryDateRangeComponent implements OnInit {

  @Input()
  dates = []

  @Input()
  inventories

  @Input()
  inventories2 = []


  dayBack = 10
  dayFront = 10

  @Output()
  changeDates = new EventEmitter();

  @Output()
  getInventoriesOut = new EventEmitter();

  @Output()
  getInventoriesOut2 = new EventEmitter();

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
      dates.push({
        "date": moment(start).format('DD-MM-YY dddd'),
        "invents": []
      });
      var newDate = start.setDate(start.getDate() + 1);
      start = new Date(newDate);
    }
    this.dates = dates;
    return this.dates

  }


  dateForm: FormGroup

  constructor(private inventoriesService: InventoryService) {
    this.dateForm = new FormGroup({
      'dayBack': new FormControl(''),
      'dayFront': new FormControl('')
    })
  }



  ngOnInit() {

    this.inventoriesService.getInventories2()
    .subscribe(inventories => {
      for(let i = inventories.length-1; i>=0; i--){
        this.inventories2.push(inventories[i])
        this.inventories2.reverse()
      }
    })

    this.dateForm.get('dayBack').valueChanges
      .distinctUntilChanged()
      .debounceTime(400)
      .subscribe(dayBack => {
        this.dayBack = dayBack
        this.changeDatesOut()
        this.inventories = this.inventoriesService.getInventoriesStream()
        this.getInventoriesOut.emit(this.inventories)
        this.getInventoriesOut2.emit(this.inventories2)
      })

    this.dateForm.get('dayFront').valueChanges
      .distinctUntilChanged()
      .debounceTime(400)
      .subscribe(dayFront => {
        this.dayFront = dayFront
        this.changeDatesOut()
        this.inventories = this.inventoriesService.getInventoriesStream()
        this.getInventoriesOut.emit(this.inventories)
        this.getInventoriesOut2.emit(this.inventories2)
      })

  }
  

}
