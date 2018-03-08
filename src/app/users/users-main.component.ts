import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-main',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.css']
})
export class UsersMainComponent implements OnInit {

  constructor(private router: Router) {
   }

  addUser(){
    this.router.navigate(['users/new']);
  }
  ngOnInit() {
  }

}
