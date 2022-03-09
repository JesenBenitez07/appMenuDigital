import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { VentasDiariasComponent } from './ventas-diarias/ventas-diarias.component';
import { ResumenSemanalComponent } from './resumen-semanal/resumen-semanal.component';


@NgModule({
  declarations: [
    VentasDiariasComponent,
    ResumenSemanalComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
