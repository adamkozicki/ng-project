import { Component, OnInit } from '@angular/core';
import { UsersService, Users } from './users.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users = [];

  constructor(private usersService:UsersService,
              private activeRoute:ActivatedRoute) {

   }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params)
      this.usersService.getUsersStream()
      .subscribe((users:Users[]) => {
        this.users = users;
      })
    })
    
  }

  edited = {};

  edit(user) {
    this.edited = Object.assign({}, user);
  }

  createNew() {
    let newUser = this.usersService.createUser();
    this.edited = newUser;
  }

  save(user){
    this.usersService.saveUser(user);
  }

}
