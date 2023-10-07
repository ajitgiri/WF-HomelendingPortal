import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HazardExceptionRoutingModule } from './hazard-exception-routing.module';
import { HazardNotesComentsComponent } from './hazard-notes-coments/hazard-notes-coments.component';
import { HazardPolicyAgencyInformationsComponent } from './hazard-policy-agency-informations/hazard-policy-agency-informations.component';
import { HazardPassedEvaluationComponent } from './hazard-passed-evaluation/hazard-passed-evaluation.component';
import { HazardHomeOwnerDeclarationsComponent } from './hazard-home-owner-declarations/hazard-home-owner-declarations.component';
import { HazardFailedEvaluationComponent } from './hazard-failed-evaluation/hazard-failed-evaluation.component';
import { HazardLoanInformationsComponent } from './hazard-loan-informations/hazard-loan-informations.component';
import { HazardExceptionDetailsComponent } from './hazard-exception-details/hazard-exception-details.component';
import { DecisionServicePipelineComponent } from './decision-service-pipeline/decision-service-pipeline.component';
import { CommonmaterialModule } from '../commonmaterial/commonmaterial.module';

@NgModule({
  declarations: [
    HazardNotesComentsComponent,
    HazardPolicyAgencyInformationsComponent,
    HazardPassedEvaluationComponent,
    HazardHomeOwnerDeclarationsComponent,
    HazardFailedEvaluationComponent,
    HazardLoanInformationsComponent,
    HazardExceptionDetailsComponent,
    DecisionServicePipelineComponent
  ],
  imports: [
    CommonModule,
    HazardExceptionRoutingModule,
    CommonmaterialModule
  ]
})
export class HazardExceptionModule { }
