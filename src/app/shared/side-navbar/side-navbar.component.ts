import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppUtilsService } from 'src/app/@utilities/services/app-utils.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
  @Input() visibleSidebar;
  @Input() visibleSidebarInputFrom;
  previousValue: any;
  masterItems: object[] = [];
  transItems: object[] = [];
  menuMappingDetails;

  constructor(private route: Router,
              private sharedService: SharedService, private appUtils: AppUtilsService) { }

  onNavigateToSelectedComponent(entityName: string) {
    this.visibleSidebar = false;
  }

  onNavigateToConfigReport(event, url: string) {
    if (event === 'config') {
      this.sharedService.isConfigurationReport = true;
      this.route.navigate([url]);
    } else {
      this.sharedService.isConfigurationReport = false;
    }
  }

  ngOnInit(): void{

    this.route.navigate(['/landing/landing-page']);
    // const menuItems = JSON.parse(sessionStorage.getItem('menuDetails'));
    // menuItems.forEach((element) => {
    
    // });
  }

  ngOnChanges(){
    if (this.previousValue !== undefined &&  this.previousValue !== this.visibleSidebarInputFrom && this.visibleSidebar === false) {
      this.visibleSidebar = true;
    }


    this.previousValue = this.visibleSidebarInputFrom;
  }
}
