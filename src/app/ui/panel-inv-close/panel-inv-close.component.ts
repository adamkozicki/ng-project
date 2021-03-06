import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel-inv-close',
  template: `
  <span class="close" (click)="close()">&times;</span>
  `,
  styles: []
})
export class PanelInvCloseComponent implements OnInit {

  @Output('close')
  onClose = new EventEmitter()

  close(){
    this.onClose.emit()
  }

  constructor() { }

  ngOnInit() {
  }

}
