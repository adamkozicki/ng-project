import { Component, OnInit, Input } from '@angular/core';
import { PanelBaseComponent } from './panel-base.component'

@Component({
  selector: 'app-panel-date',
  template: `
  <div class="card">
      <ng-content select=".card-header"></ng-content>
      
      <div class="card-body">    
        <ng-content></ng-content>
      </div>
      
      <ng-content select=".card-footer"></ng-content>
  </div>
  `,
  styles: []
})
export class PanelDateComponent extends PanelBaseComponent implements OnInit {
 

}
