import { Injectable, Inject, Optional,EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Subject, Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

export interface Users{
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

  user = []

  usersStream$ = new Subject<Users[]>();

  userStream$ = new Subject<Users[]>();

  getUsersStream() {
    if(!this.users.length){
      this.getUsers()
    }
    return this.usersStream$.startWith(this.users);
  }

  getUserStream(id) {
    if(!this.user.length){
      this.getUser(id)
    }
    return this.userStream$.startWith(this.user);
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
              .map( response => response.json())
              .subscribe( user => {
                this.user = user;
                this.userStream$.next(this.user)
              })

    // return this.http.get(url)
    //   .map((response:Response)=> response.json() );
  }



  saveUser(user){
    let request; 
    if(user.id){
      request = this.http.put(this.server_url + user.id, user)
    }else{
      request = this.http.post(this.server_url, user)
    }
      return request.map((response:Response) => response.json())
      .do( user => {
        this.getUser(user.id)
      })
  }

  createUser():Users {
    return {
      name: '',
      surname: '',
      mail: '',
      pass: '',
      address: [],
      phone: '',
      registerDate: '',
      profileImg: ''
    };
  }

}
