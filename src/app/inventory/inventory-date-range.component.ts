import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,ReactiveFormsModule  } from '@angular/forms';

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
  dayBack

  @Input()
  dayFront

  @Output()
  changeDateBack = new EventEmitter();
  changeDateFront = new EventEmitter();
  
  changeBack() {
    this.changeDateBack.emit(this.dayBack)
  }

  changeFront() {
    this.changeDateFront.emit(this.dayFront)
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
        this.changeBack()
        console.log(this.dayBack)
      })

    this.dateForm.get('dayFront').valueChanges
      .distinctUntilChanged()
      .debounceTime(400)
      .subscribe(dayFront => {
        this.dayFront = dayFront
        this.changeFront()
      })
  }

  ngOnInit() {

    console.log(this.dayBack)
  }

}
