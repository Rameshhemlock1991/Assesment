import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  config;
  constructor(private http: HttpClient) { } 
    
  loadConfig() {
    return this.http
      .get('./assets/data/config.json')
      .toPromise()
      .then(config => {
        this.config = config;
      });
  }
}
