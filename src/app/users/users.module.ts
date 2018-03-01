import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

import usersData from './users.data';
import { UsersSearchComponent } from './users-search.component';
import { UsersListComponent } from './users-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    UsersComponent,
    UsersSearchComponent,
    UsersListComponent
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
