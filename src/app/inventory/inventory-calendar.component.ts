import { Component, OnInit, ContentChild, AfterContentInit, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { InventoryDateRangeComponent } from './inventory-date-range.component';
import * as moment from 'moment';

@Component({
  selector: 'app-inventory-calendar',
  templateUrl: './inventory-calendar.component.html',
  styleUrls: ['./inventory-calendar.component.css']
})
export class InventoryCalendarComponent implements OnInit {

  open = true

  persons = ['Adam Kozicki', 'Piotr Bińkowski', 'Marta Raczyńska', 'ISP'];
  inventsA = ['39613 - Johnny Rockets', '39620 - Furrore Okęcie'];
  inventsP = ['39613 - Johnny Rockets', '39620 - Furrore Okęcie'];
  inventsM = ['39613 - Johnny Rockets', '39620 - Furrore Okęcie'];

  dates=[]

  getData(data){
    this.dates = data;
  }

  ngOnInit() {

  }

  constructor() {
    moment.locale('pl');
  }
}
