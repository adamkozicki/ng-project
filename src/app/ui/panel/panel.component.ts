import { Component, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import {PanelBaseComponent} from './panel-base.component'
import {PanelDateComponent} from './panel-date.component'
import {PanelInventComponent} from './panel-invent.component'
import {PanelCloseComponent} from './panel-close.component'

@Component({
  selector: 'app-panel',
  template: `
    <div class="card" *ngIf="open">
      <ng-content select=".card-header"></ng-content>
      
      <div class="card-body">    
        <ng-content></ng-content>
      </div>
      
      <ng-content select=".card-footer"></ng-content>
    </div>
  `,
  styles: [`
  .card,
  .card-body {
      margin-left: 1px !important;
      margin-right: 1px !important;
      margin-top: 1px !important;
      padding: 1px;
    }
  `]
})
export class PanelComponent extends PanelBaseComponent implements OnInit, AfterContentInit {

  // @ContentChildren(PanelDateComponent)
  // panels = new QueryList<PanelDateComponent>()


  // ngAfterContentInit() {
  //   setTimeout(()=>{
  //     if(this.panels.length){
  //       this.openTab(this.panels.first)
  //     }
  //   })
  //   super.ngAfterContentInit()
  // }

  // openTab(panel){
  //   this.panels.toArray().forEach(panel=>{
  //     panel.open = false
  //   })
  //   panel.open = true
  // }

}
