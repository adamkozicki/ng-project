import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InventoryService } from './inventory.service'

import { routerModule } from './inventory.routing';
import { InventoryMainComponent } from './inventory-main.component';
import { InventoryPsdComponent } from './inventory-psd.component';
import { InventoryCalendarComponent } from './inventory-calendar.component';
import { InventoryFormComponent } from './inventory-form.component';

import { PanelBaseComponent } from './../ui/panel/panel-base.component';
import { PanelInventComponent } from './../ui/panel/panel-invent.component';
import { PanelComponent } from './../ui/panel/panel.component';
import { PanelDateComponent } from './../ui/panel/panel-date.component';
import { PanelInvCloseComponent } from './../ui/panel-inv-close/panel-inv-close.component';
import { InventoryDateRangeComponent } from './inventory-date-range.component';
import { DialogComponent } from './dialog.component';

@NgModule({
  imports: [
    CommonModule,
    routerModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: InventoryService, useClass: InventoryService },
  ],
  declarations: [
    InventoryMainComponent, 
    InventoryPsdComponent, 
    InventoryCalendarComponent,
    InventoryFormComponent,
    PanelBaseComponent,
    PanelInventComponent,
    PanelComponent,
    PanelDateComponent,
    PanelInvCloseComponent,
    InventoryDateRangeComponent,
    DialogComponent
    ],
  exports: [
    InventoryMainComponent
  ]
})
export class InventoryModule { }
