import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService, Users } from './users.service'

@Component({
  selector: 'app-user-data',
  template: `
  <div *ngIf="user">
    <div class="card">
      <div class="card-header my-card">
      <span>Imię i Nazwisko</span>
      </div>
          <p class="card-text">{{ user.name + ' '+ user.surname }}</p>
    </div>
    <div class="card">
      <div class="card-header">
        <span>E-mail</span>
      </div>
          <p class="card-text">{{ user.mail }}</p>
    </div>
    <div class="card">
      <div class="card-header">
        <span>Adres</span>
      </div>
          <p *ngIf="address.city" class="card-text">{{ address.city + ', ' + address.street + ' ' +  address.numberOfBuilding + '/' + address.numberOfFlat}}</p>
    </div>
    <div class="card">
      <div class="card-header">
        <span>Nr. telefonu</span>
      </div>
          <p class="card-text">{{ user.phone  }}</p>
    </div>
    <div class="card">
      <div class="card-header">
        <span>Data rejestracji</span>
      </div>
          <p class="card-text">{{ user.registerDate }}</p>
    </div>
    <br>
    <div class="form-group">
      <button class="btn btn-success float-xs-right" (click)="edit(user)">Edytuj</button>
    </div>
  </div>
  `,
  styles: 
  [`
    .card-header {
      font-size: 0.9em;
      padding: 3px;
    }
    p.card-text {
      font-weight: 600;
      padding: 10px;
    }

  
  `]
})
export class UserDataComponent implements OnInit {

  user

  address

  edit(user) {
    this.router.navigate(['users/user',user.id,'edit'])
  }

  constructor(private activeRoute: ActivatedRoute,
    private usersService: UsersService,
    private router:Router) {
  }

  ngOnInit() {
    console.log("user-data")
    this.activeRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if (id) {
        this.usersService.getUserStream(id)
            .subscribe( (user) => {
              this.user = user
              this.address = this.user.address
            })
      }
    })
  }

}
