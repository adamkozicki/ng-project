import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService, Users } from './users.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users

  constructor(private usersService:UsersService,
              private activeRoute:ActivatedRoute) {
   }

  ngOnInit() {
      this.users = this.usersService.getUsersStream()

    console.log("adam")
      // this.usersService.getUsersStream()
      // .subscribe((users:Users[]) => {
      //   this.users = users;
      // })
  }
}
