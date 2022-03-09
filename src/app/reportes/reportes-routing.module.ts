import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumenSemanalComponent } from './resumen-semanal/resumen-semanal.component';
import { VentasDiariasComponent } from './ventas-diarias/ventas-diarias.component';

const routes: Routes = [
  { path:'',
  children:[
  {path:'ventasDiarias',component:VentasDiariasComponent},
  {path:'resumenSemanal',component:ResumenSemanalComponent},
  {path:'**', redirectTo:'carrito'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
