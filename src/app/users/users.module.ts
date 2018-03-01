import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

import usersData from './users.data'


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    UsersComponent
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
