import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombosfamiliaresComponent } from './combosfamiliares/combosfamiliares.component';
import { CombospersonalesComponent } from './combospersonales/combospersonales.component';
import { ComidachinaComponent } from './comidachina/comidachina.component';

const routes: Routes = [
{
  path:'',
  children:[
  {path:'combospersonales',component:CombospersonalesComponent},
  {path:'combosfamiliares',component:CombosfamiliaresComponent},
  {path:'comidachina',component:ComidachinaComponent},
  {path:'**', redirectTo:'menu'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
