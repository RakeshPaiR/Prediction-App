import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { OwlModule } from 'ngx-owl-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NgbModule,
    OwlModule
  ],
  providers: [NgbModule, NgbDropdown, NgbDropdownModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
