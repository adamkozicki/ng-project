import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-data',
  template: `

  <div class="card">
    <div class="card-header">
      Imię i Nazwisko
    </div>
        <p class="card-text">{{ user.name + ' '+ user.surname }}</p>
  </div>
  <div class="card">
    <div class="card-header">
      E-mail
    </div>
        <p class="card-text">{{ user.mail }}</p>
  </div>
  <div class="card">
    <div class="card-header">
      Adres
    </div>
        <p class="card-text">{{ user.address.city + ' ' + user.address.street + ' ' +  user.address.numberOfBuilding + '/' + user.address.numberOfFlat}}</p>
  </div>
  <div class="card">
    <div class="card-header">
      Nr. telefonu
    </div>
        <p class="card-text">{{ user.phone  }}</p>
  </div>
  <div class="card">
    <div class="card-header">
      Data rejestracji
    </div>
        <p class="card-text">{{ user.registerDate }}</p>
  </div>
  `,
  styles: 
  [`
    p {
      font-weight: 600;
      padding: 10px;
    }
  `]
})
export class UserDataComponent implements OnInit {

  @Input('user')
  set setUser(user){
    this.user = user;
  }

  user

  constructor() { }

  ngOnInit() {
  }

}
