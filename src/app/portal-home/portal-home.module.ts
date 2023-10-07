import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalHomeRoutingModule } from './portal-home-routing.module';
import { CommonmaterialModule } from '../commonmaterial/commonmaterial.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VolumeRegulatorModule } from '../volume-regulator/volume-regulator.module';
import { PqfiModule } from '../pqfi/pqfi.module';
import { FooterComponent } from './footer/footer.component';
import { SystemExceptionModule } from '../system-exception/system-exception.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PortalHomeRoutingModule,
    CommonmaterialModule,
    VolumeRegulatorModule,
    PqfiModule,
    SystemExceptionModule
  ]
})
export class PortalHomeModule { }
