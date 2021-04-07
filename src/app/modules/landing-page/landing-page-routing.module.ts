import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/@core/guard/auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [{
  path: 'landing-page',
  canActivate: [AuthGuard],
  component: LandingPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
