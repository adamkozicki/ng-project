import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { routerModule } from './users.routing'

import usersData from './users.data';
import { UsersSearchComponent } from './users-search.component';
import { UsersListComponent } from './users-list.component';
import { UserDetailComponent } from './user-detail.component';
import { UserCardComponent } from './user-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routerModule
  ],
  declarations: [
    UsersComponent,
    UsersSearchComponent,
    UsersListComponent,
    UserDetailComponent,
    UserCardComponent,
  ],
  providers: [
    { provide: UsersService, useClass: UsersService },
    { provide: 'UsersData', useValue: usersData }
  ],
  exports: [
    UsersComponent
  ]

})
export class UsersModule {
  UsersComponent
 }
