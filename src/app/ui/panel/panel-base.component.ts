import { Component, ContentChild, OnInit, Input } from '@angular/core';
import { PanelInvCloseComponent } from './../panel-inv-close/panel-inv-close.component';

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

  @ContentChild(PanelInvCloseComponent)
  closeBtn:PanelInvCloseComponent

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
