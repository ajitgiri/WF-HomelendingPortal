import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { SystemExceptionRoutingModule } from './system-exception-routing.module';
import { ExceptionPipelineComponent } from './exception-pipeline/exception-pipeline.component';
import { ExceptionDetailsComponent } from './exception-details/exception-details.component';
import { SystemExceptionHomeComponent } from './system-exception-home/system-exception-home.component';
import { CommonmaterialModule } from '../commonmaterial/commonmaterial.module';


@NgModule({
  declarations: [
    ExceptionPipelineComponent,
    ExceptionDetailsComponent,
    SystemExceptionHomeComponent
  ],
  imports: [
    CommonModule,
    CommonmaterialModule,
    HttpClientModule,
    SystemExceptionRoutingModule
  ]
})
export class SystemExceptionModule { }
