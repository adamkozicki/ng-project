import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService:UsersService) { }

  user;

  ngOnInit() {
    this.userService.getUser("2")
      .subscribe(user=>{
        this.user = user;
      })
  }

}
