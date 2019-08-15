import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  @Input() sportsType: string;
  @Input() pastMatches: Array<{
    sport: string,
    league: string,
    home: string,
    away: string,
    homeScore: string,
    awayScore: string,
    isTieBreaker: boolean,
    homeTieScore: string,
    awayTieScore: string,
    winMethod: string,
    winner: string,
    dateString: string
    date: Date
  }>;

  /* pastMatches = [
    {
      sport: 'football',
      league: 'Premier League',
      home: 'Manchester United',
      away: 'Chelsea',
      homeScore: '0',
      awayScore: '0',
      isTieBreaker: false,
      homeTieScore: '',
      awayTieScore: '',
      winMethod: 'ManU and Chelsea draw without scoring any goal',
      winner: 'draw',
      date: '13/08/2019'
    },
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
      date: '13/08/2019'
    },
    {
      sport: 'football',
      league: 'International',
      home: 'Brazil',
      away: 'Argentina',
      homeScore: '4',
      awayScore: '4',
      isTieBreaker: true,
      homeTieScore: '5',
      awayTieScore: '4',
      winMethod: 'Brazil beat Argentina in Penalties (5-4) after a 4 goals tie',
      winner: 'home',
      date: '14/08/2019'
    },
    {
      sport: 'football',
      league: 'La Liga',
      home: 'Real Madrid',
      away: 'Barcelona',
      homeScore: '1',
      awayScore: '3',
      isTieBreaker: false,
      homeTieScore: '',
      awayTieScore: '',
      winMethod: 'FCB beat RMA with the score (3-1)',
      winner: 'away',
      date: '15/08/2019'
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
      date: '14/08/2019'
    },
    {
      sport: 'football',
      league: 'Premier League',
      home: 'Liverpool',
      away: 'Manchester City',
      homeScore: '3',
      awayScore: '5',
      isTieBreaker: false,
      homeTieScore: '',
      awayTieScore: '',
      winMethod: 'MCFC beat LIV with a score (5-3)',
      winner: 'away',
      date: '14/08/2019'
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
      date: '14/08/2019'
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
      date: '15/08/2019'
    },
    {
      sport: 'football',
      league: 'Premier League',
      home: 'Tottenham',
      away: 'Arsenal',
      homeScore: '1',
      awayScore: '0',
      isTieBreaker: false,
      homeTieScore: '',
      awayTieScore: '',
      winMethod: 'TOT beat ARS with a score (1-0)',
      winner: 'home',
      date: '13/08/2019'
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
      dateOld: '13/08/2019',
      date: new Date()
    },
  ];
 */

  filterMatches(sportsType) {
    this.pastMatches = this.pastMatches.map(e => {
      e.date = new Date(e.dateString);
      return e;
    });
    this.pastMatches.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    return this.pastMatches.filter(x => x.sport === sportsType);
  }

  constructor() { }

  ngOnInit() {
  }

}
