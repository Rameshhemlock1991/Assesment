import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './@core/guard/auth.guard';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { LandingPageComponent } from './modules/landing-page/landing-page/landing-page.component';
import { MyPlayistsComponent } from './modules/my-playists/my-playists/my-playists.component';


const routes: Routes = [
  { path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
          path: 'landing',
          children: [{
            path: '',
            loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule)
          }]
      },
      {
        path: 'myplayists',
        children: [{
          path: '',
          loadChildren: () => import('./modules/my-playists/my-playists.module').then(m => m.MyPlayistsModule)
        }]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
