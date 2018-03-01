import { Injectable, Inject, Optional } from '@angular/core';

@Injectable()
export class UsersService {

  constructor(@Optional() @Inject('UsersData') usersData ) {
    this.users = usersData === null ? this.users : usersData;
   }

  users = []

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

  getUsers() {
    return this.users;
  }

}
