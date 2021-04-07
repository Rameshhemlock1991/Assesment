import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/@core/guard/auth.guard';
import { MyPlayistsComponent } from './my-playists/my-playists.component';
import { MyPlaylistMasterComponent } from './my-playlist-master/my-playlist-master.component';

const routes: Routes = [{
  path: 'myplayists-create',
  canActivate: [AuthGuard],
  component: MyPlayistsComponent
},
{
  path: 'myplayists-master',
  canActivate: [AuthGuard],
  component: MyPlaylistMasterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPlayistsRoutingModule { }
