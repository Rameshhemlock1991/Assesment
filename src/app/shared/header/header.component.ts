import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/@core/guard/auth.service';
import { AppUtilsService } from 'src/app/@utilities/services/app-utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onMenuClick: EventEmitter<any> = new EventEmitter();

  productDetails: Observable<any>;
  siteDetails: Observable<any>;
  roleName;
  userId;


  constructor(private authservice: AuthService,
              private route: Router, public appUtils: AppUtilsService) { }
  sideBarValue: Boolean;
  visibleSidebarInputFrom;

  ngOnInit(): void {
    // let userDetails = JSON.parse(sessionStorage.getItem(""));
  }

  onMenuClickClicked(): void {
    this.onMenuClick.emit(this);
  }

  onClickLogo() {
    // if(localStorage.getItem('roleId')=="RO"){
    //   this.route.navigate(['/home/dashboard/roview']);
    // } else{
    //   this.route.navigate(['/home/dashboard/tsmview']);
    // }
  }
  callLogout(){
  }

  getStyle(color){
    return {'background-color' : color};
  }

}
