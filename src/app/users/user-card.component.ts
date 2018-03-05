import { Component, OnInit, Input } from '@angular/core';
import { UsersService, Users } from './users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  user

  constructor(private activeRoute: ActivatedRoute,
    private usersService: UsersService,
    private router:Router) {
  }

  ngOnInit() {
   console.log("user-card")
   console.log(this.user)
    this.activeRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if (id) {
        this.usersService.getUser(id)
            .subscribe( (user:Users) => {
              this.user = user
            })
      }
    })
  }

  // ngOnInit() {

  //   let id = this.activeRoute.snapshot.params['id'];
  //   console.log(id + "adam")
  //   this.usersService.getUser(id)
  //   .subscribe(user => {
  //     this.user = user;
  //   })
  // }

}
