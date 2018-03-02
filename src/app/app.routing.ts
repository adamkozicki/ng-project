import { UsersComponent } from './users/users.component'
import { RouterModule, Routes } from '@angular/router';

const routesConfig:Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: '**', redirectTo: 'users', pathMatch: 'full'},
]

export const routerModule = RouterModule.forRoot(routesConfig,{
  enableTracing: true
  // useHash: true
});