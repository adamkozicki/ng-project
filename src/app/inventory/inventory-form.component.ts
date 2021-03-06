import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from './inventory.service'

@Component({
  selector: 'app-inventory-form',
  template: `
  <div>
    <form #formRef="ngForm" novalidate="true">
    <div class="row">
      <div class="form-group col-md-12">
        <label>PSD</label>
        <select #nameRef="ngModel" required [ngModel]="invent.PSD" name="PSD" class="form-control form-control-sm">
          <option selected="selected" value="{{invent.PSD}}" disabled hidden>{{invent.PSD}}{{" - " + invent.NPSD}}</option>
          <option *ngFor="let location of locations" value="{{location.PSD}}">{{location.PSD}}{{" - " + location.NPSD}}</option>
        </select>
        <div class="has-danger" *ngIf="nameRef.touched || nameRef.dirty || formRef.submitted">
          <div class="form-control-feedback" 
                *ngIf="nameRef.errors?.required">
                To pole jest wymagane
          </div>
          <div class="form-control-feedback" 
                *ngIf="nameRef.errors?.minlength">
                To pole musi mieć przynajmniej {{nameRef.errors.minlength.requiredLength}} znaki
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <button class="btn btn-danger float-xs-right" type="submit">Zapisz</button>
      <button class="btn btn-success float-xs-right" >Wróć</button>
    </div>
    </form>
  </div>
  `,
  styles: []
})
export class InventoryFormComponent implements OnInit {

  @Input()
  invent

  @Input()
  addDate = []

  locations = []

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {

    this.inventoryService.getLocations()
    .subscribe(locations => {
      for(let i = locations.length-1; i>=0; i--){
        this.locations.push(locations[i])
        this.locations.reverse()
      }
    })

    if(this.invent.id) {
      console.log(this.invent.id)
    }
    
  }

}
