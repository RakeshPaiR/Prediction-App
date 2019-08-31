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

  filterDates() {
    console.log(new Set(this.pastMatches.map(item => item.date).filter((value, index, self) => self.indexOf(value) === index)));
  }

  filterMatches(sportsType) {
    this.pastMatches = this.pastMatches.map(e => {
      e.date = new Date(e.dateString);
      return e;
    });
    this.pastMatches.sort((a, b) => {
      // console.log(new Date(a.date));
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    // console.log(this.pastMatches);
    return this.pastMatches.filter(x => x.sport === sportsType);
  }

  constructor() { }

  ngOnInit() {
  }

}
