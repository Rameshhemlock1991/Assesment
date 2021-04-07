import { Injectable, Type } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUtilsService } from './app-utils.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  baseUrl: string;
  exportUrl;

  constructor(private httpClient: HttpClient, private appUtils: AppUtilsService, private configService: AppConfigService,
              private router: Router, private confirmationService: ConfirmationService) {
      this.baseUrl = this.configService.config['appBaseUrl'];
  }

  callHTTPRequest(requestUrl: any, httpAction: string, requestData?) {

    let requestHttpParam =  {};
    

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    .set('Accept', '*/*');

    let httpParms: HttpParams = new HttpParams();

    for (const param in requestHttpParam) {
      if (param && requestHttpParam.hasOwnProperty(param)) {
        httpParms = httpParms.set(param, requestHttpParam[param]);
      }
    }

    return  this[httpAction](httpParms, headers, requestUrl);
  }


  post(requestParam: any, headers: any, requestUrl?: string): Observable<any> {

    return this.httpClient.post(requestUrl, requestParam, { 'headers': headers })
      .pipe(map((res) => {
        return res;
      },
      (err) => {
        return err;
      }
    ));
  }

  put(requestParam: any, headers: any, requestUrl?: string): Observable<any> {

    return this.httpClient.post(requestUrl, requestParam, { 'headers': headers })
      .pipe(map((res) => {
        return res;
      },
      (err) => {
        return err;
      }
    ));
  }

  get(requestParam: any, headers: any, requestUrl?: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + requestUrl, requestParam)
      .pipe(map((res) => {
        return res;
      },
      (err) => {
        return err;
      }
    ));
  }

  delete(requestParam: any, headers: any, requestUrl?: string): Observable<any> {

    return this.httpClient.post(requestUrl, requestParam, { 'headers': headers })
      .pipe(map((res) => {
        return res;
      },
      (err) => {
        return err;
      }
    ));
  }
}
