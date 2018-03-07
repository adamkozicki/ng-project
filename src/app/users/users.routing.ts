import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail.component';
import { UserFormComponent } from './user-form.component';
import { UserDataComponent } from './user-data.component';
import { UserCardComponent } from './user-card.component';
import { UsersMainComponent } from './users-main.component';
import { RouterModule, Routes } from '@angular/router';

const routesConfig:Routes = [
  {path: 'users', component: UsersComponent,
    children:[
        {path:'', component: UsersMainComponent },
        {path:'new', component: UserDetailComponent,
          children:[
            {path:'', component: UserFormComponent },
          ]},
        {path:':id', component: UserDetailComponent,
          children:[
            {path:'', component: UserDataComponent },
            {path:':id/edit', component: UserFormComponent }
          ]
         },      
      ] },  
]

export const routerModule = RouterModule.forChild(routesConfig);