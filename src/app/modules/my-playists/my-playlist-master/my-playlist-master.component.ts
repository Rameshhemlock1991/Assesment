import { Component, OnInit } from '@angular/core';
import { MyPlaylistMasterService } from './my-playlist-master.service';

@Component({
  selector: 'app-my-playlist-master',
  templateUrl: './my-playlist-master.component.html',
  styleUrls: ['./my-playlist-master.component.css']
})
export class MyPlaylistMasterComponent implements OnInit {
  playLists;
  constructor(private myPlaylistMasterService: MyPlaylistMasterService) { }

  ngOnInit(): void {
    const selectedPlaylists =  this.myPlaylistMasterService.getInitDetails();
    if (selectedPlaylists){
      const playListDetails = JSON.parse(sessionStorage.getItem('playListDtls'));
      if (playListDetails.length > 0)
      {
        const filterPlayList = playListDetails.find((val) => {
          return val['id'] === selectedPlaylists['id'];
        });

        if (filterPlayList){
            this.playLists = [filterPlayList];
            debugger;
        }
      }
    }
  }

}
