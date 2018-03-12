import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-contact',
  template: `
  <div *ngIf="isOpen">
      <span class="close" (click)="close()">&times;</span>
      <p class="card-text">e-mail: {{user.mail}}</p>
      <span class="close" (click)="close()">&times;</span>
      <p class="card-text">phone: {{user.phone}}</p>
  </div>
  `,
  styles: []
})
export class UserContactComponent implements OnInit {
  
  @Input('open')
  isOpen

  @Input()
  user

  @Output()
  openChange = new EventEmitter()
  
  close(){
    this.isOpen = false
    this.openChange.emit(this.isOpen)
  }

  constructor() { }

  ngOnInit() {
  }

}
