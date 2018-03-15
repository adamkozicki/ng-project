import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-inventory-calendar',
  templateUrl: './inventory-calendar.component.html',
  styleUrls: ['./inventory-calendar.component.css']
})
export class InventoryCalendarComponent implements OnInit {


  open = true

  persons = ['Adam Kozicki','Piotr Bińkowski','Marta Raczyńska', 'ISP'];
  dates = ['2018-03-14','2018-03-15','2018-03-16', '2018-03-17'];
  invents = ['39613 - Johnny Rockets','39620 - Furrore Okęcie'];


  constructor() { }

  ngOnInit() {
  }

}
