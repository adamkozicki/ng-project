import { Component, OnInit, Input } from '@angular/core';
import { PanelBaseComponent } from './panel-base.component'

@Component({
  selector: 'app-panel-date',
  template: `
  <div class="card" *ngIf="open">
      <ng-content select=".card-header"></ng-content>
      
      <div class="card-body">    
        <ng-content></ng-content>
      </div>
      
      <ng-content select=".card-footer"></ng-content>
  </div>
  `,
  styles: 
  [`

  .card {
    border: 1px solid #17a2b8;
    margin-bottom: 15px !important;
  }
    .card,
  .card-body {
      margin-left: 1px !important;
      margin-right: 1px !important;
      margin-top: 1px !important;
      padding: 1px;
    }
  `]
})
export class PanelDateComponent extends PanelBaseComponent implements OnInit {
 

}
