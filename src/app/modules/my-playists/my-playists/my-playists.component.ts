import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AppUtilsService } from 'src/app/@utilities/services/app-utils.service';
import { MyPlaylistMasterService } from '../my-playlist-master/my-playlist-master.service';
import { MyPlaylistHelpComponent } from './modal/my-playlist-help/my-playlist-help.component';

@Component({
  selector: 'app-my-playists',
  templateUrl: './my-playists.component.html',
  styleUrls: ['./my-playists.component.css']
})
export class MyPlayistsComponent implements OnInit {

  dialogRef: DynamicDialogRef;
  playLists = [];
  constructor(private dialogService: DialogService, private myPlaylistMasterService: MyPlaylistMasterService,
              private appUtils: AppUtilsService) { }

  ngOnInit(): void {
    const playListsObj =  JSON.parse(sessionStorage.getItem('playlists'));
    this.playLists = JSON.parse(JSON.stringify(playListsObj));
  }

  onClickCreate(){
    this.dialogRef = this.dialogService.open(MyPlaylistHelpComponent, {
      data : this,
      header: 'Create a Playlist',
      width: '30%',
      contentStyle: {'max-height': '450px'},
      baseZIndex: 10000
    });

    this.dialogRef.onClose.subscribe((responseObj) => {
      if (responseObj) {
        const playListsObj =  JSON.parse(sessionStorage.getItem('playlists'));
        playListsObj.push({
          id : (((1+Math.random())*0x10000)|0).toString(16).substring(1),
          name: responseObj['strPlaylist']
        });
        this.playLists = JSON.parse(JSON.stringify(playListsObj));
        sessionStorage.setItem('playlists', JSON.stringify(playListsObj));
      }
    });
  }

  onClickPlayList(selectedList){
    this.myPlaylistMasterService.setInitDetails(selectedList);
    this.appUtils.navigate('/myplayists/myplayists-master');
  }
}
