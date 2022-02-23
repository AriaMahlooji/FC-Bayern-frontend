import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  response: string;
  scoresAgainstOpponents: Observable<any>;
  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.scoresAgainstOpponents=this.httpClient.get('http://localhost:8105/ScoreAgainstOpponent/?opponent=DSC%20Arminia%20Bielefeld');
    this.scoresAgainstOpponents.subscribe(data=>{
    console.log('My data: ', data);
    this.response=JSON.stringify(this.scoresAgainstOpponents);
    console.log(data[Object.keys(data)[1]]);
    });
  }



}
