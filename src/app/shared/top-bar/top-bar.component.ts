import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  isLoggedIn = true;
  userFirstName = 'Rakesh';
  userFullName = 'Rakesh Pai R';
  userMailID = 'rakeshpair1998@gmail.com';
  userImageSrc = '/assets/Images/userImage.png';
  userLevel = 3;
  curPts = 390;
  maxPts = 400;
  minPts = 250;
  rank = 125;
  bestRank = 13;
  totalParticipants = 1234;
  curPercent = (this.curPts - this.minPts) * 100 / (this.maxPts - this.minPts);

  ngOnInit() {
  }

}
