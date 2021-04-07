import { Component, Input, OnInit } from '@angular/core';
import { UserFooterService } from './user-footer.service';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrls: ['./user-footer.component.css']
})
export class UserFooterComponent implements OnInit {

  @Input() userDetails: object;
  constructor(private userFooterService: UserFooterService) { }

  ngOnInit() {
    this.userDetails = this.userFooterService.getModifiedUser();

    this.userFooterService.userDetails.subscribe(
      (response: any) => {
        this.userDetails = response;
    });
  }

}
