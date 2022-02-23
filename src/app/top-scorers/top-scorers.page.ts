import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { stringify } from 'querystring';
import { PassBetCompService } from '../pass-bet-comp.service';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.page.html',
  styleUrls: ['./top-scorers.page.scss'],
})
export class TopScorersPage implements OnInit {
  scoresAgainstOpponent;
  searchedText;
  filteredOpponents;
  opponents = ['1. FC Köln',
  '1. FC Nürnberg',
  '1. FC Union Berlin',
  '1. FSV Mainz 05',
  'Bayer 04 Leverkusen',
  'Borussia Dortmund',
  'Borussia Mönchengladbach',
  'DSC Arminia Bielefeld',
  'Eintracht Braunschweig',
  'Eintracht Frankfurt',
  'FC Augsburg',
  'FC Ingolstadt 04',
  'FC Schalke 04',
  'Fortuna Düsseldorf',
  'Hamburger SV',
  'Hannover 96',
  'Hertha BSC Berlin',
  'RB Leipzig',
  'SC Freiburg',
  'SC Paderborn 07',
  'SV Darmstadt 98',
  'SV Werder Bremen',
  'TSG 1899 Hoffenheim',
  'VfB Stuttgart',
  'VfL Wolfsburg'];
  constructor(public http: HttpClient, private passBetCompService: PassBetCompService, private navCtrl: NavController) { }

  ngOnInit() {
    this.filteredOpponents = this.opponents;
  }

  filterSearchList(e: Event)
  {
    this.searchedText = (e.target as HTMLInputElement).value;
    this.filteredOpponents = this.opponents.filter(m=> m.includes(this.searchedText));
  }
  getTopScorersAgainstThisTeam(opponent: string)
  {
    console.log(opponent);
  //  this.scoresAgainstOpponent=this.http.get('http://localhost:8105/ScoreAgainstOpponent/?opponent='+opponent).subscribe(
  //    data=>{
  //      console.log('My data: ', data);
  //      console.log(Object.keys(data));
  //      });
    this.passBetCompService.chosenOpponent = opponent;
    this.navCtrl.navigateForward(['/','performance-against-oppo']);
  }
  backButton()
  {
    this.navCtrl.navigateBack(['/','places']);
  }
}
