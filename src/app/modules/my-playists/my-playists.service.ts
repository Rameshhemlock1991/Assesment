import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyPlayistsService {

  constructor() { }

  getFormGroupObj(){
    return {
      strPlaylist : ''
    };
  }
}
