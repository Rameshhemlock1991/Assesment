import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppHttpService } from '../@utilities/services/app-http.service';
import { AppUtilsService } from '../@utilities/services/app-utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMenuClick: EventEmitter<any> = new EventEmitter();
  constructor(private route: Router, private httpSvc: AppHttpService) { }

  visibleSidebarInput = false;
  visibleSidebarInputFrom = true;
  showConfirmDialog;

  ngOnInit(): void {
    // As per requirement all details were assigned in sessions
    this.httpSvc.callHTTPRequest('albums', 'get').subscribe((responseObj: any) => {
      sessionStorage.setItem('albums', JSON.stringify(responseObj));
    });

    this.httpSvc.callHTTPRequest('photos', 'get').subscribe((responseObj: any) => {
      sessionStorage.setItem('songs', JSON.stringify(responseObj));
    });

    sessionStorage.setItem('playlists', JSON.stringify([]));
    sessionStorage.setItem('playListDtls', JSON.stringify([]));
    
    this.visibleSidebarInput =  false;
    this.showConfirmDialog = false;

  }

  setSideBarValue(){
    this.visibleSidebarInputFrom = !this.visibleSidebarInputFrom;
    this.visibleSidebarInput = true;
  }

}
