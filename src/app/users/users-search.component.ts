import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from './users.service'

@Component({
  selector: 'app-users-search',
  template: `
    <form>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Słowa kluczowe">
      </div>
    </form>
  `,
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent implements OnInit {

  constructor( ) {
  }


  ngOnInit() {
  }

}
