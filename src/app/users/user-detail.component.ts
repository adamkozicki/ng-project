import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService:UsersService,
  private activeRoute: ActivatedRoute) { }

  user;

  ngOnInit() {
    let id = this.activeRoute.snapshot.params['id'];
    this.userService.getUser(id)
      .subscribe(user=>{
        this.user = user;
      })
  }

}
