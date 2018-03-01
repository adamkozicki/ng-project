import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users = [];

  constructor(private usersService:UsersService) {

   }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    console.log(this.users);
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
