import { Router } from '@angular/router';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { debug } from 'console';

@Component({
  selector: 'app-tabs',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() tabs: any[];
  @Input() config: any = {};
  @Output() handleClose: any = new EventEmitter();

  index = 0;

  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
    const MenuIndex = this.index;
    this.tabs.map((val, idx) => {
        if (MenuIndex === idx) {
          val.isActive = true;
        }
        else {
          val.isActive = false;
        }
      });
    this.tabs = JSON.parse(JSON.stringify(this.tabs));
  }

  openPrev() {
    this.index = (this.index === 0) ? 2 : this.index - 1;
  }


  tabChange(event) {
    const parentScope = this.config['parentScope'];
    this.tabs = JSON.parse(JSON.stringify(this.tabs));
    let activeTab;
    this.tabs.map((item) => {
      if (item.isActive){
        item.isActive = false;
        activeTab = item;
      }
    });

    if (activeTab && parentScope[activeTab.serviceName] && parentScope[activeTab.serviceName]['tabChange$']){
      const tabChangeValue = parentScope[activeTab.serviceName]['tabChange$'].value;
      activeTab.isActive = false;
      parentScope[activeTab.serviceName]['tabChange$'].next(!tabChangeValue);
    }

    this.tabs[event.index].isActive = true;
    this.router.navigateByUrl(this.tabs[event.index].path);
  }

  ngOnInit() {
    const activeTab = this.tabs.filter((item) => {
      return item.isActive;
    });

    if (activeTab.length > 0) {
      this.router.navigateByUrl(activeTab[0].path);
    }
  }

  ngOnChanges(params){
    if (params && params.tabs && !params.tabs.firstChange){
      if (params.tabs.currentValue.length > 0){
        const activeTab = this.tabs.filter((item) => {
          return item.isActive;
        });

        if (activeTab.length > 0) {
          this.router.navigateByUrl(activeTab[0].path);
        }
      }

    }
  }

}
