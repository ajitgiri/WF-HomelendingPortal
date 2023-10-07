import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemExceptionHomeComponent } from './system-exception-home/system-exception-home.component';
import { ExceptionPipelineComponent } from './exception-pipeline/exception-pipeline.component';
import { ExceptionDetailsComponent } from './exception-details/exception-details.component';

const routes: Routes = [
  {path:'',component: SystemExceptionHomeComponent},
  {path:'exceptionPipeLine', component: ExceptionPipelineComponent},
  {path:'exceptionDetails', component: ExceptionDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemExceptionRoutingModule { }
