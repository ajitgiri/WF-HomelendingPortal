import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolumeRegulatorRoutingModule } from './volume-regulator-routing.module';
import { VolumeregulatorHomeComponent } from './volumeregulator-home/volumeregulator-home.component';
import { VolumeregulatorListComponent } from './volumeregulator-list/volumeregulator-list.component';
import { VolumeregulatorDetailsComponent } from './volumeregulator-details/volumeregulator-details.component';
import { CommonmaterialModule } from '../commonmaterial/commonmaterial.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VolumeregulatorHomeComponent,
    VolumeregulatorListComponent,
    VolumeregulatorDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonmaterialModule,
    VolumeRegulatorRoutingModule
  ]
})
export class VolumeRegulatorModule { }
