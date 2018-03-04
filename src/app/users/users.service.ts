import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Subject, Observable} from 'rxjs';
import 'rxjs/add/operator/map'

export interface Users{
      id: string,
      name: string,
      surname: string,
      mail: string,
      pass: string,
      address: any[],
      phone: string,
      registerDate: string,
      profileImg: string
}

@Injectable()
export class UsersService {

  server_url = 'http://localhost:3000/users/';

  constructor(private http:Http) { }


  users = []

  usersStream$ = new Subject<Users[]>();

  getUsersStream() {
    if(!this.users.length){
      this.getUsers()
    }
    return this.usersStream$.startWith(this.users);
  }

  getUsers(){
    return this.http.get(this.server_url)
              .map( response => response.json())
              .subscribe( users => {
                this.users = users;
                this.usersStream$.next(this.users)
              })
  }

  getUser(id){
    let url = `http://localhost:3000/users/${id}`;

    return this.http.get(url)
      .map((response:Response)=> response.json() );
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
