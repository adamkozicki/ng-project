import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService, Users } from './users.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input()
  open = false

  users

  constructor(private usersService:UsersService,
              private activeRoute:ActivatedRoute) {
   }

  ngOnInit() {
    this.users = this.usersService.getUsersStream()
  }
}
