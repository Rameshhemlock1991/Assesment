import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidebarModule} from 'primeng/sidebar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppSharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule} from 'ngx-ui-loader';
import {CarouselModule} from 'primeng/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptorService } from './@core/guard/auth-interceptor.service';
import { ConfirmationService } from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';
import { AppConfigService } from './@utilities/services/app-config.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogService } from 'primeng/dynamicdialog';

export const configFactory = (configService: AppConfigService) => {
  return () => configService.loadConfig();
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    BrowserAnimationsModule,
    AppSharedModule,
    HttpClientModule,
    AgGridModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    CarouselModule,
    NgbModule,
    FileUploadModule,
    ConfirmDialogModule
  ],
   providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [AppConfigService],
      multi: true
    },
    ConfirmationService, DialogService
  ],
  exports : [ CalendarModule, CarouselModule, FileUploadModule, ConfirmDialogModule],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

