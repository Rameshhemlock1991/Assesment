import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor() { }

  getFormGroupObj(){
    return {
      strSearchId: ''
    };
  }
}