import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolumeregulatorHomeComponent } from './volumeregulator-home/volumeregulator-home.component';
import { VolumeregulatorListComponent } from './volumeregulator-list/volumeregulator-list.component';
import { VolumeregulatorDetailsComponent } from './volumeregulator-details/volumeregulator-details.component';

const routes: Routes = [
  { path: '', component : VolumeregulatorHomeComponent },
  { path: 'volumeregulatorList', component : VolumeregulatorListComponent },
  { path: 'volumeregulatorDetails', component : VolumeregulatorDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolumeRegulatorRoutingModule { }
