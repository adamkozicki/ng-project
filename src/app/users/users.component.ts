import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService, Users } from './users.service'

@Component({
  selector: 'app-users',
  template: `
   <router-outlet></router-outlet>
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