import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPlayistsRoutingModule } from './my-playists-routing.module';
import { MyPlayistsComponent } from './my-playists/my-playists.component';
import { MyPlaylistMasterComponent } from './my-playlist-master/my-playlist-master.component';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { MyPlaylistHelpComponent } from './my-playists/modal/my-playlist-help/my-playlist-help.component';
import { AppSharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MyPlayistsComponent, MyPlaylistMasterComponent, MyPlaylistHelpComponent],
  imports: [
    CommonModule,
    MyPlayistsRoutingModule,
    ConfirmDialogModule,
    AppSharedModule
  ],
  exports : [
    ConfirmDialogModule
  ],
  providers: [DialogService, ConfirmationService]
})
export class MyPlayistsModule { }
