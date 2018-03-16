import { Component, OnInit, ContentChild } from '@angular/core';
import {Subject, Observable} from 'rxjs';
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


  dayBack = 1
  dayFront = 1
  dayBack$ = new Subject(); 
  dayFront$= new Subject();

  getDayBackStream() {
    return this.dayBack$.startWith(this.dayBack$);
  }

  getDayFrontStream() {
    return this.dayFront$.startWith(this.dayFront$);
  }

  getDayBackSearchStream(){
    return Observable
          .from(this.dayBack$)
          .startWith(this.dayBack)
  }

  getDayFrontSearchStream(){
    return Observable
          .from(this.dayFront$)
          .startWith(this.dayFront)
  }


  dates = []; //Array where rest of the dates will be stored

  prevDate = moment().subtract(this.dayBack, 'days').format('MM-DD-YYYY');;//15 days back date from today(This is the from date)

  nextDate = moment().add(this.dayFront, 'days').format('MM-DD-YYYY');;//Date after 15 days from today (This is the end date)

  //creating JS date objects
  start = new Date(this.prevDate);
  end = new Date(this.nextDate);

  ngOnInit() {
    while (this.start < this.end) {
      this.dates.push(moment(this.start).format('DD-MM-YY dddd'));
      var newDate = this.start.setDate(this.start.getDate() + 1);
      this.start = new Date(newDate);
    }
    console.log(this.dayBack);
  }

  constructor() {
    moment.locale('pl');
  }
}
