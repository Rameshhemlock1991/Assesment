import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AppHttpService } from 'src/app/@utilities/services/app-http.service';
import { AppUtilsService } from 'src/app/@utilities/services/app-utils.service';
import { MyPlaylistHelpComponent } from '../../my-playists/my-playists/modal/my-playlist-help/my-playlist-help.component';
import { LandingPageService } from './landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  songlists = [];
  albumlists = [];
  responsiveOptions;
  landingPageForm;
  autocompleteConfig;

  strSearchIdObj;
  strSearchIdSelVal;
  dialogRef: DynamicDialogRef;
  srcFrom;

  constructor(private httpSvc: AppHttpService, private appUtils: AppUtilsService,
              private landingSvc: LandingPageService, private fb: FormBuilder,
              private dialogService: DialogService) {
    const landingPageFormGroupObj: object = landingSvc.getFormGroupObj();
    this.landingPageForm = this.fb.group(landingPageFormGroupObj);
   }

  ngOnInit(): void {
    this.srcFrom = 'LandingPage';
    const allAlbums = JSON.parse(sessionStorage.getItem('albums'));
    const allSongs = JSON.parse(sessionStorage.getItem('songs'));

    if (allSongs) {
      allSongs.forEach((value, index) => {
        if (index > 50) {
          return false;
        }
        else
        {
          this.songlists.push(value);
        }
      });
      this.appUtils.setAutoCompleteObjAndValue(allSongs, null, this, 'strSearchId');
    }

    // top 50 for trending albums
    if (allAlbums){
      allAlbums.forEach((value, index) => {
        if (index > 50) {
          return false;
        }
        else
        {
          this.albumlists.push(value);
        }
      });
    }
  }

  onClickAdd(songObj){
    this['selectedSong'] = songObj;
    this.dialogRef = this.dialogService.open(MyPlaylistHelpComponent, {
      data : this,
      header: 'Add to Playlists',
      width: '30%',
      contentStyle: {'max-height': '450px'},
      baseZIndex: 10000
    });

    this.dialogRef.onClose.subscribe((responseObj) => {
      
    });
  }

}
