import { Injectable, Inject, Optional,EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Subject, Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

interface Address {
  street: string,
  numberOfBuilding: string,
  numberOfFlat: number,
  city: string,
  province: string,
  country: string
}

export interface Users{
      id: string,
      name: string,
      surname: string,
      mail: string,
      pass: string,
      address: Address,
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
  }

  saveUser(user){
    let request; 
    if(user.id){
      request = this.http.put(this.server_url + user.id, user)
    }else{
      user.id = Date.now().toString();
      request = this.http.post(this.server_url, user)
    }
    return request.map((response:Response) => response.json())
      .do( user => {
        this.getUser(user.id)
        this.getUsers()
      })
  }

  deleteUser(user){
    let request; 
    if(user.id){
      request = this.http.delete(this.server_url + user.id)
    }else{
      return;
    }
    return request.map((response:Response) => response.json())
      .do( user => {
        this.getUsers()
      })
  }

  createUser():Users {
    return {
      id: '',
      name: '',
      surname: '',
      mail: '',
      pass: '',
      address: {
        street: '',
        numberOfBuilding: '',
        numberOfFlat: null,
        city: '',
        province: '',
        country: ''
      },
      phone: '',
      registerDate: '',
      profileImg: ''
    };
  }

  getUsersSearchStream(){
    return Observable
          .from(this.usersStream$)
          .startWith(this.users)
  }

  search(query){
    let url = `http://localhost:3000/users?q=${query}`
  
    this.http.get(url)
    .map((response:Response)=>{
      let data = response.json()
      return data;
    })
    .do(users =>{ this.users = users })
    .subscribe( users => {
      this.usersStream$.next(this.users)
    })
  }

}
