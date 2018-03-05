import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService, Users } from './users.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: Users;

  save(valid, user) {
    if(!valid){
      return;
    }
    this.usersService.saveUser(user)
    .subscribe( user => {
      this.router.navigate(['user',user.id]);
    })
  }

  constructor(private activeRoute: ActivatedRoute,
    private usersService: UsersService,
    private router:Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if (id) {
        this.usersService.getUser(id)
            .subscribe( (user:Users) => {    
              this.user = Object.assign({},user)
            })
      }else{
        this.user = this.usersService.createUser()
      }
    })
  }

}
