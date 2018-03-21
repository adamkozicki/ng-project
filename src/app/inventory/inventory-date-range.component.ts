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
  styles:
  [`
    .slidecontainer {
    width: 100%; /* Width of the outside container */
    }

    /* The slider itself */
    .slider {
        -webkit-appearance: none;  /* Override default CSS styles */
        appearance: none;
        width: 100%; /* Full-width */
        height: 15px; /* Specified height */
        background: #fff2b2; /* Grey background */
        outline: none; /* Remove outline */
        opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
        -webkit-transition: .2s; /* 0.2 seconds transition on hover */
        transition: opacity .2s;
    }

    /* Mouse-over effects */
    .slider:hover {
        opacity: 1; /* Fully shown on mouse-over */
    }

    .reverse {

      -webkit-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);}
    }

    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */ 
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 15px; /* Set a specific slider handle width */
        height: 15px; /* Slider handle height */
        background: #5bc0de; /* Green background */
        cursor: pointer; /* Cursor on hover */
    }

    .slider::-moz-range-thumb {
        width: 15px; /* Set a specific slider handle width */
        height: 15px; /* Slider handle height */
        background: #5bc0de; /* Green background */
        cursor: pointer; /* Cursor on hover */
    }

  
  `]

})
export class InventoryDateRangeComponent implements OnInit {

  @Input()
  dates = []

  @Input()
  inventories = []

  dayBack = 10
  dayFront = 10

  @Output()
  changeDates = new EventEmitter();
  getInventoriesOut = new EventEmitter();

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

  constructor(private inventoriesService: InventoryService) {
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
    this.inventoriesService.getInventoriesStream().subscribe(inventories => this.inventories = inventories)
    console.log(this.inventories)
    this.getInventoriesOut.emit(this.inventories)

  }

}
