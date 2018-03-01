import { Injectable, Inject, Optional } from '@angular/core';
import { Http } from '@angular/http';
import {Subject, Observable} from 'rxjs'

// utwórz tutaj interface

@Injectable()
export class UsersService {

  server_url = 'http://localhost:3000/users/';

  constructor(private http:Http) {
   }

  users = []

  usersStream$ = new Subject<any[]>();

  getUsersStream() {
    return this.usersStream$.startWith(this.users);
  }

  getUsers() {
    return this.http.get(this.server_url)
      .map(response=>response.json())
      .subscribe(users=> {
        this.users = users;
        this.usersStream$.next(this.users);
      })     
  }



  saveUser(user){
    if(user.id){
      let index = this.users.findIndex((old_user) => (
        old_user.id === user.id
      ))
      this.users.splice(index, 1, user)
    }else{
      user.id = Date.now();
      this.users.push(user);
    }
  }

  createUser(){
    var newUser = {
      name: "",
      surname: "",
      mail: "",
      pass: "",
      address: {
        street: "",
        numberOfBuilding: "",
        numberOfFlat: "",
        city: "",
        province: "",
        country: ""
      },
      phone: "",
      registerDate: new Date()
    }
    return Object.assign({}, newUser);
  }

}
