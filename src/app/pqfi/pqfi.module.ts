import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PqfiRoutingModule } from './pqfi-routing.module';
import { PqfiHomeComponent } from './pqfi-home/pqfi-home.component';
import { CommonmaterialModule } from '../commonmaterial/commonmaterial.module';


@NgModule({
  declarations: [
    PqfiHomeComponent
  ],
  imports: [
    CommonModule,
    CommonmaterialModule,
    PqfiRoutingModule
  ]
})
export class PqfiModule { }
