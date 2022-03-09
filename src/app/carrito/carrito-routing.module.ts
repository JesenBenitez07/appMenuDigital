import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { FacturasComponent } from './facturas/facturas.component';
import { InventariosComponent } from './inventarios/inventarios.component';

const routes: Routes = [
 { path:'',
  children:[
  {path:'compras',component:ComprasComponent},
  {path:'facturas',component:FacturasComponent},
  {path:'inventarios',component:InventariosComponent},
  {path:'**', redirectTo:'carrito'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
