import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { AppSharedModule } from 'src/app/shared/shared.module';   
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppSharedModule
  ]
})
export class HomeModule { }
