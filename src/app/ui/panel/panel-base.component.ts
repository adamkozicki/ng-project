import { Component, ContentChild, OnInit, Input } from '@angular/core';
import { PanelInvCloseComponent } from './../panel-inv-close/panel-inv-close.component';

@Component({
  selector: 'app-panel-base',
  template: `
    <p>
      panel-base works!
    </p>
  `,
  styles: [`

  .card,
  .card-body {
      margin-left: 1px !important;
      margin-right: 1px !important;
      margin-top: 1px !important;
      padding: 1px;
    }`
    
    
  ]
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
