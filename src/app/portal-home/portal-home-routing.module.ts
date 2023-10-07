import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"portalHome", component: HomeComponent,
  children : 
    [
      { path: 'admin', loadChildren: () => import('../admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
      { path: 'vr', loadChildren: () => import('../volume-regulator/volume-regulator.module').then(m => m.VolumeRegulatorModule) },
      { path: 'pqfi', loadChildren: () => import('../pqfi/pqfi.module').then(m => m.PqfiModule) },
      { path: 'hazard', loadChildren: () => import('../hazard-exception/hazard-exception.module').then(m => m.HazardExceptionModule) },
      { path: 'sysExcep', loadChildren: () => import('../system-exception/system-exception.module').then(m => m.SystemExceptionModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalHomeRoutingModule { }
