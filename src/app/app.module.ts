import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DataInmemoryService} from './data-inmemory.service';

import { AppRoutingModule } from './app-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';


import { AppComponent } from './app.component';
import { ClienteAddUpdateComponent } from './cliente-add-update/cliente-add-update.component';
import { TableComponent } from './table/table.component';
import { UserResumenComponent } from './user-resumen/user-resumen.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClienteAddUpdateComponent,
    TableComponent,
    UserResumenComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(  //remover cuando se use un server real
      DataInmemoryService, {dataEncapsulation: false} 
    ),
    NoopAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
