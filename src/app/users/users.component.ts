import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from './users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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
