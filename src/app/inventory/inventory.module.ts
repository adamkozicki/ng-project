import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routerModule } from './inventory.routing';
import { InventoryMainComponent } from './inventory-main.component';
import { InventoryPsdComponent } from './inventory-psd.component';
import { InventoryCalendarComponent } from './inventory-calendar.component';

import { PanelBaseComponent } from './../ui/panel/panel-base.component';
import { PanelInventComponent } from './../ui/panel/panel-invent.component';
import { PanelComponent } from './../ui/panel/panel.component';
import { PanelDateComponent } from './../ui/panel/panel-date.component';
import { PanelInvCloseComponent } from './../ui/panel-inv-close/panel-inv-close.component';

@NgModule({
  imports: [
    CommonModule,
    routerModule
  ],
  declarations: [
    InventoryMainComponent, 
    InventoryPsdComponent, 
    InventoryCalendarComponent,
    PanelBaseComponent,
    PanelInventComponent,
    PanelComponent,
    PanelDateComponent,
    PanelInvCloseComponent
    ],
  exports: [
    InventoryMainComponent
  ]
})
export class InventoryModule { }
