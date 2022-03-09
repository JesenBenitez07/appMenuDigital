import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { CombospersonalesComponent } from './combospersonales/combospersonales.component';
import { CombosfamiliaresComponent } from './combosfamiliares/combosfamiliares.component';
import { ComidachinaComponent } from './comidachina/comidachina.component';


@NgModule({
  declarations: [
    CombospersonalesComponent,
    CombosfamiliaresComponent,
    ComidachinaComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
