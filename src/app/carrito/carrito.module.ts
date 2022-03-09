import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { ComprasComponent } from './compras/compras.component';
import { FacturasComponent } from './facturas/facturas.component';
import { InventariosComponent } from './inventarios/inventarios.component';


@NgModule({
  declarations: [
    ComprasComponent,
    FacturasComponent,
    InventariosComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule
  ]
})
export class CarritoModule { }
