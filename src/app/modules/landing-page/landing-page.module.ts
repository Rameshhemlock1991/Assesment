import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppSharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    AppSharedModule
  ]
})
export class LandingPageModule { }
