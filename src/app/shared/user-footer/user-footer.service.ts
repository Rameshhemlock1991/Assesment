import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserFooterService {

  userDetails: any;
  modifiedUserInfo: object;

  constructor() {
    this.userDetails = new Subject<any>();
  }

  setUserSource(modifiedDetails: any) {
    const userData = this.modifiedUserData(modifiedDetails);
    this.userDetails.next(userData);
  }

  modifiedUserData(response) {
    const modifiedUserValue = {
      created_by: response.strCreatedBy,
      created_date: response.dtCreatedDate,
      modified_by: response.strModifiedBy,
      modified_date: response.dtModifiedDate
    };
    this.modifiedUserInfo = modifiedUserValue;
    return modifiedUserValue;
  }

  getModifiedUser() {
    return this.modifiedUserInfo;
  }
}
