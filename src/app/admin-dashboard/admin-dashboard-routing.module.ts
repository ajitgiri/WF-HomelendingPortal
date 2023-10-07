import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardHomeComponent } from './admin-dashboard-home/admin-dashboard-home.component';
import { FlexlayoutComponent } from './flexlayout/flexlayout.component';

const routes: Routes = [
  {path: 'admindashboard', component: AdminDashboardHomeComponent},
  {path: 'flex', component: FlexlayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
