import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonmaterialModule } from '../commonmaterial/commonmaterial.module';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';



@NgModule({
  declarations: [
   LoginComponent,
    RegistrationComponent,
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    CommonmaterialModule,
    AuthorizationRoutingModule
    
  ]
})
export class AuthorizationModule { }
