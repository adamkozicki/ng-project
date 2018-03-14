import { Component, OnInit } from '@angular/core';
import { PanelBaseComponent } from './panel-base.component'

@Component({
  selector: 'app-panel-invent',
  template: `
  <div class="card">     
      <div class="card-body">    
        <ng-content></ng-content>
      </div>
  </div>
  `,
  styles: []
})
export class PanelInventComponent extends PanelBaseComponent implements OnInit {



}
