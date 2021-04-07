import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {SidebarModule} from 'primeng/sidebar';
import { AutocompleteComponent } from '../@utilities/autocomplete/autocomplete.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CarouselModule } from 'primeng/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedRoutingModule } from './shared-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { TabComponent } from 'src/app/shared/tab/tab.component';
import { FileUploadModule } from 'primeng/fileupload';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    SideNavbarComponent,
    HeaderComponent,
    FooterComponent,
    AutocompleteComponent,
    TabComponent,
    UserFooterComponent
  ],
  imports: [
    CommonModule ,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CalendarModule,
    SidebarModule,
    DynamicDialogModule,
    CarouselModule,
    NgbModule,
    SharedRoutingModule,
    TabViewModule,
    FileUploadModule,
    InputNumberModule
  ],
  exports : [
    SideNavbarComponent,
    HeaderComponent,
    FooterComponent,
    AutocompleteComponent,
    TabComponent,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CalendarModule,
    DynamicDialogModule,
    CarouselModule,
    NgbModule,
    TabViewModule,
    SidebarModule,
    FileUploadModule,
    UserFooterComponent,
    InputNumberModule
  ]
})
export class AppSharedModule { }
