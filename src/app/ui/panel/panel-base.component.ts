import { Component, ContentChild, OnInit, Input } from '@angular/core';
import { PanelCloseComponent } from './panel-close.component';

@Component({
  selector: 'app-panel-base',
  template: `
    <p>
      panel-base works!
    </p>
  `,
  styles: []
})
export class PanelBaseComponent implements OnInit {

  @Input()
  open = true

  @ContentChild(PanelCloseComponent)
  closeBtn:PanelCloseComponent

  ngAfterContentInit() {
    this.subscribeCloseBtns()
  }

  subscribeCloseBtns(){
    if(this.closeBtn){
      this.closeBtn.onClose.subscribe(()=>{
        this.open = false
      })
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
