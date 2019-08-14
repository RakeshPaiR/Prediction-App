import { Component, OnInit } from '@angular/core';
import { LeftBarComponent } from '../shared/left-bar/left-bar.component';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css'],
  providers: [LeftBarComponent]
})
export class CricketComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
