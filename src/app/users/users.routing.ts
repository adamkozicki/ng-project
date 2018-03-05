import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail.component';
import { UserFormComponent } from './user-form.component';
import { UserDataComponent } from './user-data.component';
import { RouterModule, Routes } from '@angular/router';

const routesConfig:Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/user/:id', component: UserDetailComponent,
    children:[
        {path:'', component: UserDataComponent },
        {path:'new', component: UserFormComponent },
        {path:'edit', component: UserFormComponent },
      ] },
]

export const routerModule = RouterModule.forChild(routesConfig);