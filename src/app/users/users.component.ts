import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService, Users } from './users.service'

@Component({
  selector: 'app-users',
  template: `
  <div class="container">
   <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService:UsersService,
              private activeRoute:ActivatedRoute) {

   }
  ngOnInit() {
  }

}