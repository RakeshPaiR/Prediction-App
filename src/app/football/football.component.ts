import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {

  pastMatchesFootball = [
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
      dateString: '2019/08/13',
      date: Date
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
      dateString: '2019/08/14',
      date: Date
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
      dateString: '2019/08/15',
      date: Date
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
      dateString: '2019/08/14',
      date: Date
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
      dateString: '2019/08/13',
      date: Date
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
