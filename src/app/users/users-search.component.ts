import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users-search',
  template: `
    <form [formGroup]="searchForm">
      <div class="input-group">
        <input type="text" formControlName="query" class="form-control" [(ngModel)] = "query" placeholder="Słowa kluczowe">
      </div>
    </form>
  `,
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent implements OnInit {

  searchForm:FormGroup

  query

  constructor(private userService: UsersService) { 
    this.searchForm = new FormGroup({
      'query': new FormControl('')
    })
  this.query = ""
  this.searchForm.get('query').valueChanges
    // .filter(query => query.length >= 1 )
    .distinctUntilChanged()
    .debounceTime(400)
    .subscribe(query => {
        this.userService.search(query)
    })
  }

  ngOnInit() {
  }

}
