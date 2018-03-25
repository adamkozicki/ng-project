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

  showDialog = false

  persons = ['Adam Kozicki', 'Piotr Bińkowski', 'Marta Raczyńska', 'ISP'];

  dates
  inventories

  addDate = [];

  editInvent = [];

  inventories2 = []

  OpenDialog(data) {
    this.showDialog = true;
    if(data.status) {
      console.log(data.status)
      this.addDate = [];
      this.editInvent = [];
      this.editInvent.push(data);
    }else{
      this.editInvent = [];
      this.addDate = [];
      this.addDate.push(data.date);
    }
    
  }

  getData(data){
    this.dates = data;
  }

  getInventoriesOut(data){
    this.inventories = data;
  }

  getInventoriesOut2(data){
    this.inventories2 = data;

    for(let i=0; i<this.inventories2.length; i++) {
      for(let j=0; j<this.dates.length; j++) {
        if(this.inventories2[i].date == this.dates[j].date){
          this.dates[j].invents.push(this.inventories2[i])
        }
      }
    }
  }


  ngOnInit() {

  }

  AfterContentInit() {
    
  }

  constructor() {
    moment.locale('pl');
  }
}
