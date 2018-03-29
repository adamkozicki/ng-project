import { Injectable, Inject, Optional,EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Subject, Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

export interface Inventory{
      id: string,
      PSD: string,
      NPSD: string,
      date: string,
      pass: string,
      person: string,
      type: string,
      status: string
}

@Injectable()
export class InventoryService {

  server_url = 'http://localhost:3000/inventories/';
  server_url_locations = 'http://localhost:3000/locations/';

  constructor(private http:Http) { }

  inventories = []
  inventory = []
  inventories2 = []

  inventoriesStream$ = new Subject<Inventory[]>();

  inventoryStream$ = new Subject<Inventory[]>();

  getInventoriesStream() {
    if(!this.inventories.length){
      this.getInventories()
    }
    return this.inventoriesStream$.startWith(this.inventories);
  }

  getInventoryStream(id) {
    if(!this.inventory.length){
      this.getInventory(id)
    }
    return this.inventoryStream$.startWith(this.inventory);
  }

  getInventories(){
    return this.http.get(this.server_url)
              .map( response => response.json())
              .subscribe( inventories => {
                this.inventories = inventories;
                this.inventoriesStream$.next(this.inventories)
              })
  }

  getInventories2(){
    return this.http.get(this.server_url).map( response => response.json())

  }

  getInventory(id){
    let url = `http://localhost:3000/inventories/${id}`;

    return this.http.get(url)
              .map( response => response.json())
              .subscribe( inventory => {
                this.inventory = inventory;
                this.inventoryStream$.next(this.inventory)
              })
  }

  saveInventory(inventory){
    let request; 
    if(inventory.id){
      request = this.http.put(this.server_url + inventory.id, inventory)
    }else{
      inventory.id = Date.now().toString();
      request = this.http.post(this.server_url, inventory)
    }
    return request.map((response:Response) => response.json())
      .do( inventory => {
        this.getInventory(inventory.id)
        this.getInventories()
      })
  }

  deleteInventory(inventory){
    let request; 
    if(inventory.id){
      request = this.http.delete(this.server_url + inventory.id)
    }else{
      return;
    }
    return request.map((response:Response) => response.json())
      .do( inventory => {
        this.getInventories()
      })
  }

  createInventory():Inventory {
    return {
      id: '',
      PSD: '',
      NPSD: '',
      date: '',
      pass: '',
      person: '',
      type: '',
      status: ''
    };
  }

  getInventoriesSearchStream(){
    return Observable
          .from(this.inventoriesStream$)
          .startWith(this.inventories)
  }

  search(query){
    let url = `http://localhost:3000/inventories?q=${query}`
  
    this.http.get(url)
    .map((response:Response)=>{
      let data = response.json()
      return data;
    })
    .do(inventories =>{ this.inventories = inventories })
    .subscribe( inventories => {
      this.inventoriesStream$.next(this.inventories)
    })

    return this.inventoriesStream$.startWith (this.inventories)
  }

  getLocations(){
    return this.http.get(this.server_url_locations).map( response => response.json())

  }
}
