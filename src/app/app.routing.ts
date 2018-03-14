import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { InventoryMainComponent } from './inventory/inventory-main.component';

const routesConfig:Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'inventory', component: InventoryMainComponent},
  {path: '**', redirectTo: 'users', pathMatch: 'full'},
]

export const routerModule = RouterModule.forRoot(routesConfig,{
  // enableTracing: true
  // useHash: true
});