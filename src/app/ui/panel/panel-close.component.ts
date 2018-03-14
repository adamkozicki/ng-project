import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel-close',
  template: `
  <span class="close" (click)="close()">&times;</span>
  `,
  styles: []
})
export class PanelCloseComponent implements OnInit {

  @Output('close')
  onClose = new EventEmitter()

  close(){
    this.onClose.emit()
  }

  constructor() { }

  ngOnInit() {
  }

}
