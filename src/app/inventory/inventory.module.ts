import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { routerModule } from './inventory.routing';
import { InventoryMainComponent } from './inventory-main.component';
import { InventoryPsdComponent } from './inventory-psd.component';
import { InventoryCalendarComponent } from './inventory-calendar.component';

import { PanelBaseComponent } from './../ui/panel/panel-base.component';
import { PanelInventComponent } from './../ui/panel/panel-invent.component';
import { PanelComponent } from './../ui/panel/panel.component';
import { PanelDateComponent } from './../ui/panel/panel-date.component';
import { PanelInvCloseComponent } from './../ui/panel-inv-close/panel-inv-close.component';
import { InventoryDateRangeComponent } from './inventory-date-range.component';

@NgModule({
  imports: [
    CommonModule,
    routerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    InventoryMainComponent, 
    InventoryPsdComponent, 
    InventoryCalendarComponent,
    PanelBaseComponent,
    PanelInventComponent,
    PanelComponent,
    PanelDateComponent,
    PanelInvCloseComponent,
    InventoryDateRangeComponent
    ],
  exports: [
    InventoryMainComponent
  ]
})
export class InventoryModule { }
