import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyPlaylistMasterService {
  summaryDetails;
  constructor() { }

  getInitDetails() {
    return this.summaryDetails;
  }

  setInitDetails(data){
      this.summaryDetails = data;
  }
}
