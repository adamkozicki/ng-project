import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routesConfig:Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/user', component: UserDetailComponent},
]

export const routerModule = RouterModule.forChild(routesConfig);