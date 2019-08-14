import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LeftBarComponent } from './left-bar/left-bar.component';


@NgModule({
  declarations: [
    TopBarComponent,
    FooterComponent,
    LeftBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbDropdownModule,
    RouterModule
  ],
  exports: [
    TopBarComponent,
    FooterComponent,
    LeftBarComponent
  ],
  entryComponents: [
    TopBarComponent
  ]
})
export class SharedModule { }
