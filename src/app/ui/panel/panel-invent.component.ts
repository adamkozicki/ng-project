import { Component, OnInit, Input } from '@angular/core';
import { PanelBaseComponent } from './panel-base.component'

@Component({
  selector: 'app-panel-invent',
  template: `
  <div class="card" *ngIf="open">     
      <div class="card-body">    
        <ng-content></ng-content>
      </div>
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
export class PanelInventComponent extends PanelBaseComponent implements OnInit {

}
