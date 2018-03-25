import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService, Users } from './users.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [`
    input.ng-dirty.ng-invalid, 
    textarea.ng-dirty.ng-invalid,
    input.ng-touched.ng-invalid, 
    textarea.ng-touched.ng-invalid{
      border: 1px solid red;
    }
  `]
})
export class UserFormComponent implements OnInit {

  user;
  
  save(valid, user) {
    if(!valid){
      return;
    }
    this.usersService.saveUser(user)
      .subscribe( user => {
        this.router.navigate(['users',user.id]);
      })
    }

  return(user){
    this.router.navigate(['users',user.id]);
  }

  constructor(private activeRoute: ActivatedRoute,
    private usersService: UsersService,
    private router:Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if (id) {
        this.usersService.getUserStream(id)
            .subscribe( (user) => {    
              this.user = Object.assign({},user)
            })
      }else{
        this.user = this.usersService.createUser()
      }
    })
  }

}
