import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClienteAddUpdateComponent} from './cliente-add-update/cliente-add-update.component';
import { TableComponent } from './table/table.component';
import { UserResumenComponent } from './user-resumen/user-resumen.component';


const routes: Routes = [
  {path: '', redirectTo: '/table', pathMatch:'full'},
  {path: 'table', component: TableComponent},
  {path: 'addupdate/:id' , component: ClienteAddUpdateComponent },
  {path: 'addupdate', component: ClienteAddUpdateComponent},
  {path: 'resumen/:id', component: UserResumenComponent},
  {path: 'resumen', component: UserResumenComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
