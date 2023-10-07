import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonmaterialModule } from './commonmaterial/commonmaterial.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { PortalHomeModule } from './portal-home/portal-home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HazardExceptionModule } from './hazard-exception/hazard-exception.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonmaterialModule,
    AuthorizationModule,
    PortalHomeModule,
    HazardExceptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
