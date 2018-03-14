import { InventoryMainComponent } from './inventory-main.component';
import { InventoryCalendarComponent } from './inventory-calendar.component';
import { InventoryPsdComponent } from './inventory-psd.component';
import { RouterModule, Routes } from '@angular/router';

const routesConfig:Routes = [
  {path: 'inventory', component: InventoryMainComponent,
    children:[
        {path:'', component: InventoryCalendarComponent },
        {path:'psd', component: InventoryPsdComponent }    
    ] },    
]

export const routerModule = RouterModule.forChild(routesConfig);