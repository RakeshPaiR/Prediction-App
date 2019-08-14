import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { OwlModule } from 'ngx-owl-carousel';
import { FootballComponent } from './football/football.component';
import { CricketComponent } from './cricket/cricket.component';

const appRoutes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'home' , component: HomeComponent},
  { path: 'football' , component: FootballComponent},
  { path: 'cricket' , component: CricketComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FootballComponent,
    CricketComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NgbModule,
    OwlModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NgbModule, NgbDropdown, NgbDropdownModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
