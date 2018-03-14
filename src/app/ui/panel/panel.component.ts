import { Component, OnInit, AfterContentInit } from '@angular/core';
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
  styles: []
})
export class PanelComponent extends PanelBaseComponent implements OnInit {


  ngAfterContentInit() {
    super.ngAfterContentInit()
  }

}
