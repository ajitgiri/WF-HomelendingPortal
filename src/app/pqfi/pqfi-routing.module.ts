import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PqfiHomeComponent } from './pqfi-home/pqfi-home.component';

const routes: Routes = [
  {path :"", component: PqfiHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PqfiRoutingModule { }
