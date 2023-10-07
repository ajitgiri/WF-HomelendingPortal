import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HazardExceptionDetailsComponent } from './hazard-exception-details/hazard-exception-details.component';
import { DecisionServicePipelineComponent } from './decision-service-pipeline/decision-service-pipeline.component';

const routes: Routes = [
  {path: 'hazardExceptionDetails', component: HazardExceptionDetailsComponent},
  {path: 'decisionSvcPipeline', component: DecisionServicePipelineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HazardExceptionRoutingModule { }
