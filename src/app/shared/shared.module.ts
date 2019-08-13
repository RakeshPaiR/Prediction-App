import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    TopBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbDropdownModule
  ],
  exports: [
    TopBarComponent,
    FooterComponent
  ],
  entryComponents: [
    TopBarComponent
  ]
})
export class SharedModule { }
