import { Component, OnInit } from '@angular/core';
import { LeftBarComponent } from '../shared/left-bar/left-bar.component';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css'],
  providers: [LeftBarComponent]
})
export class CricketComponent implements OnInit {

  public pastMatchesCricket = [
    {
      sport: 'cricket',
      league: 'Indian Premier League',
      home: 'Mumbai Indians',
      away: 'Chennai Super Kings',
      homeScore: '149/6 (20)',
      awayScore: '148/10 (20)',
      isTieBreaker: false,
      homeTieScore: '',
      awayTieScore: '',
      winMethod: 'MI beat CSK by 1 run',
      winner: 'home',
      dateString: '13/08/2019',
      date: new Date()
    },
    {
      sport: 'cricket',
      league: 'International',
      home: 'Australia',
      away: 'England',
      homeScore: '223/1 (32)',
      awayScore: '222/10 (49.5)',
      isTieBreaker: false,
      homeTieScore: '',
      awayTieScore: '',
      winMethod: 'AUS beat ENG by 9 wickets(18 overs left) ',
      winner: 'home',
      dateString: '14/08/2019',
      date: new Date()
    },
    {
      sport: 'cricket',
      league: 'International',
      home: 'Bangladesh',
      away: 'Sri Lanka',
      homeScore: '183/10 (43)',
      awayScore: '187/6 (47.3)',
      isTieBreaker: false,
      homeTieScore: '',
      awayTieScore: '',
      winMethod: 'SL beat BAN by 4 wickets (15 balls left)',
      winner: 'away',
      dateString: '14/08/2019',
      date: new Date()
    },
    {
      sport: 'cricket',
      league: 'International',
      home: 'West-Indies',
      away: 'India',
      homeScore: '210/10 (42/46 ov)',
      awayScore: '279/7 (50)',
      isTieBreaker: false,
      homeTieScore: '',
      awayTieScore: '',
      winMethod: 'IND beat WI by 59 runs(DLS method)',
      winner: 'away',
      dateString: '15/08/2019',
      date: new Date()
    },
    {
      sport: 'cricket',
      league: 'International',
      home: 'Pakistan',
      away: 'New-Zealand',
      homeScore: '123/10 (33.5)',
      awayScore: '124/4 (32.1)',
      isTieBreaker: false,
      homeTieScore: '',
      awayTieScore: '',
      winMethod: 'NZ beat PAK by 6 wickets (17.5 overs left)',
      winner: 'away',
      dateString: '13/08/2019',
      date: new Date()
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
