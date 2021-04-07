import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AppUtilsService } from 'src/app/@utilities/services/app-utils.service';
import { MyPlayistsService } from '../../../my-playists.service';

@Component({
  selector: 'app-my-playlist-help',
  templateUrl: './my-playlist-help.component.html',
  styleUrls: ['./my-playlist-help.component.css']
})
export class MyPlaylistHelpComponent implements OnInit {
  playListForm;
  playLists;
  enableCreate;
  parentScope;
  constructor(private fb: FormBuilder, private masterSvc: MyPlayistsService, private dialogConfig: DynamicDialogConfig,
              private confirmationService: ConfirmationService, private appUtils: AppUtilsService) {
    const searchFormGroupObj: object = masterSvc.getFormGroupObj();
    this.playListForm = this.fb.group(searchFormGroupObj);
  }

  ngOnInit(): void {
    this.playLists =  JSON.parse(sessionStorage.getItem('playlists'));
    this.parentScope = this.dialogConfig.data;
    if (this.parentScope['srcFrom'] === 'LandingPage'){
      this.enableCreate = false;
    }
    else{
      this.enableCreate = true;
    }
  }

  onClickCreate(event){
    if (!this.playListForm.value['strPlaylist']){
        this.appUtils.okAlert(this, 'Please enter Playlist Name', 'Error');
        return false;
    }
    this.dialogConfig.data.dialogRef.close(this.playListForm.value);
  }

  onClickPlaylist(selectedObj){
    const playListDetails = JSON.parse(sessionStorage.getItem('playListDtls'));
    const selectedSongObj = this.parentScope['selectedSong'];
    if (playListDetails.length > 0)
    {
      const filterPlayList = playListDetails.find((val) => {
        return val['id'] === selectedObj['id'];
      });

      if(filterPlayList){
        filterPlayList['song'].push(selectedSongObj);
      }
      else
      {
        playListDetails.push({
          id : selectedObj['id'],
          name : selectedObj['name'],
          song : [selectedSongObj]
        });
      }
    }
    else
    {
      playListDetails.push({
        id : selectedObj['id'],
        name : selectedObj['name'],
        song : [selectedSongObj]
      });
    }

    sessionStorage.setItem('playListDtls', JSON.stringify(playListDetails));
    this.dialogConfig.data.dialogRef.close();
  }
}
