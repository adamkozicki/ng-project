import { Component, OnInit, Input, Inject } from '@angular/core';
import { UsersService, Users } from './users.service';

@Component({
  selector: 'app-user-detail',
  template: `
    <div class="row mt-1">
      <div class="col">
        <app-user-card  class="card"></app-user-card>
      </div>
      <div class="col">
        <h4 class="display-5 mb-2 float-xs-right">Dane użytkownika</h4>
          <router-outlet></router-outlet>
      </div>
    </div>
    `,
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  constructor(private userService:UsersService) { }

  ngOnInit() {
    console.log('adam')
  }

}
