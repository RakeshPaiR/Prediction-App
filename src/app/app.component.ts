import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TopBarComponent, FooterComponent]
})
export class AppComponent {
  title = 'Prediction-app';
}
