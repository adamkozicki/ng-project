import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UsersModule } from './users/users.module';
import { InventoryModule } from './inventory/inventory.module';

import { routerModule } from './app.routing'
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PanelCloseComponent } from './ui/panel/panel-close.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PanelCloseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    InventoryModule,
    routerModule
  ],
  exports:[
    PanelCloseComponent    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
