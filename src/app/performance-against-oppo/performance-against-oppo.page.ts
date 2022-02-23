/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable max-len */
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PassBetCompService } from '../pass-bet-comp.service';
import { Chart } from 'chart.js';
import { AlertController, NavController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-performance-against-oppo',
  templateUrl: './performance-against-oppo.page.html',
  styleUrls: ['./performance-against-oppo.page.scss'],
})
export class PerformanceAgainstOppoPage implements OnInit {

  @ViewChild('doughnutCanvas',{static: true}) private doughnutCanvas: ElementRef;

  doughnutChart: any;

  public doughnutChartLabels = ['Won','Lost','Draw'];
  doughnutChartData;
  public doughnutChartType = 'doughnut';

  firstMax = 0;
  firstMaxIndex = 0;

  secondMax = 0;
  secondMaxIndex= 0;

  thirdMax = 0;
  thirdMaxIndex= 0;

  firstMaxR = 0;
  firstMaxIndexR = 0;

  secondMaxR = 0;
  secondMaxIndexR= 0;

  thirdMaxR = 0;
  thirdMaxIndexR= 0;

  scoredGoalsStatisticsAgainstOpponent=[0,0,0,0,0,0];
  sortedScoredGoalsStatisticsAgainstOpponent= [0,0,0,0,0,0];

  receivedGoalsStatisticsAgainstOpponent=[0,0,0,0,0,0];
  sortedReceivedGoalsStatisticsAgainstOpponent= [0,0,0,0,0,0];

  overalPerformanceAgainstOpponent;
  sortedSubsAgainstOpponent;
  scoresAgainstOpponent;
  scoredPlayers;
  scoredPlayersData;
  constructor(public passBetCompService: PassBetCompService, private http: HttpClient, public alertCtrl: AlertController, private navCtrl:NavController) { }

  ngOnInit()
  {
    console.log(this.passBetCompService.chosenOpponent);
    // eslint-disable-next-line max-len
    this.scoresAgainstOpponent=this.http.get('http://localhost:8105/ScoreAgainstOpponent/?opponent='+this.passBetCompService.chosenOpponent).subscribe(
      data=>{
        console.log('My data: ', data);
        console.log(Object.keys(data));
        this.scoredPlayersData = data;
        this.scoredPlayers = Object.keys(data);
        console.log(this.scoredPlayersData['Lewandowski'][1]);
        console.log(this.scoredPlayers.includes('Lewandowski'));
        this.scoredPlayersData['Robert Lewandowski'][0] += this.scoredPlayersData['Lewandowski'][0];
        this.scoredPlayers.splice('Lewandowski',1);
        });

     //eslint-disable-next-line max-len
    this.http.get('http://localhost:8105/getSortedSubsAgainst/?opponent='+this.passBetCompService.chosenOpponent).
    subscribe(
      data=>{
        console.log(data);
        this.sortedSubsAgainstOpponent = data;
      }
    );
    // eslint-disable-next-line max-len

    this.doughnutChartMethod();

     this.http.get('http://localhost:8105/getScoredGoalsStaAgainst/?opponent='+this.passBetCompService.chosenOpponent).
    subscribe(
      data=>{
        this.scoredGoalsStatisticsAgainstOpponent =[data[0],data[1],data[2],data[3],data[4],data[5]];
        console.log(this.scoredGoalsStatisticsAgainstOpponent);

        this.sortedScoredGoalsStatisticsAgainstOpponent = this.scoredGoalsStatisticsAgainstOpponent;
        for(let i = 0; i < 6; i++)
        {
          console.log(this.sortedScoredGoalsStatisticsAgainstOpponent[i]);
          if(this.sortedScoredGoalsStatisticsAgainstOpponent[i] > this.firstMax)
          {
            this.firstMax = this.sortedScoredGoalsStatisticsAgainstOpponent[i];
            this.firstMaxIndex = i;
          }
        }
      }
    );

    this.http.get('http://localhost:8105/getReceivedGoalsStaAgainst/?opponent='+this.passBetCompService.chosenOpponent).
    subscribe(
      data=>{
        this.receivedGoalsStatisticsAgainstOpponent =[data[0],data[1],data[2],data[3],data[4],data[5]];
        console.log(this.receivedGoalsStatisticsAgainstOpponent);

        this.sortedReceivedGoalsStatisticsAgainstOpponent = this.receivedGoalsStatisticsAgainstOpponent;
        for(let i = 0; i < 6; i++)
        {
          console.log(this.sortedReceivedGoalsStatisticsAgainstOpponent[i]);
          if(this.sortedReceivedGoalsStatisticsAgainstOpponent[i] > this.firstMaxR)
          {
            this.firstMaxR = this.sortedReceivedGoalsStatisticsAgainstOpponent[i];
            this.firstMaxIndexR = i;
          }
        }
      }
    );


  }

  doughnutChartMethod()
   {
    this.overalPerformanceAgainstOpponent = this.http.get('http://localhost:8105/getOveralPerformanceAgainst/?opponent='+this.passBetCompService.chosenOpponent).
    subscribe(
      (res: any)=>
      {
        this.doughnutChartData = res;
        console.log(this.doughnutChartData);
        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
          type: 'doughnut',
          data: {
            labels: ['Won', 'Lost', 'Draw'],
            datasets: [{
              label: '# of Votes',
              data: this.doughnutChartData,
              backgroundColor: [
                'rgb(0, 230, 77)',
                'rgb(255, 51, 51)',
                'rgb(77, 121, 255)'
              ],
              hoverBackgroundColor: [
                '#FFCE56',
                '#FF6384',
                '#36A2EB'
              ]
            }]
          }
        });
      }
    );
  }
  async analyzeThisSub(substitution: any)
  {
    let firstPart= '';
    let secondPart='';
    let thirdPart='';
    let nFirstPart= '';
    let nSecondPart='';
  //Positive Effects
    // eslint-disable-next-line @typescript-eslint/dot-notation
    firstPart = `${substitution['Evaluation'][0]>0 ? 'Bayern Scored '+substitution['Evaluation'][0]+'goals after this sub' : ''}`;
    // eslint-disable-next-line @typescript-eslint/dot-notation
    secondPart = `${substitution['Evaluation'][1]>0 ? ', '+substitution['Evaluation'][1]+'of them scored immediately' : ''}`;
    // eslint-disable-next-line @typescript-eslint/dot-notation
    thirdPart = `${substitution['Evaluation'][2]>0 ? ' and '+substitution['Evaluation'][2]+'of them were scored by substituted player meaning '+substitution['PlayerIn']+'<br/>': ''}`;
  //Negative Effects
    nFirstPart = `${substitution['Evaluation'][3]>0 ? 'Bayern Received '+substitution['Evaluation'][3]+'goals after this sub' : ''}`;
    nSecondPart = `${substitution['Evaluation'][4]>0 ? ' and '+substitution['Evaluation'][4]+'of them were received immediately' : ''}`;
    console.log(substitution);





    const alert = await this.alertCtrl.create({
      header:'Season:'+substitution['Season'],
      message: substitution['Sub Player Roles']+ '<br/>'+'<br/>'
      // eslint-disable-next-line @typescript-eslint/dot-notation
      +firstPart + secondPart + thirdPart + '<br/>' + nFirstPart + nSecondPart ,
      buttons:['OK']

    });
    await alert.present();
    const result = alert.onDidDismiss();
    console.log(result);
  }

  async analyzeThisSub2(substitution: any)
  {
    const alert = await this.alertCtrl.create({
      header:'Season:'+substitution['Season'],
      subHeader: substitution['GameDirection'] + ' Match',
      message: 'Result Befor Sub: ' + substitution['ResBeforSub']+ '<br/>'+ 'Result After Sub: ' + substitution['ResAfterSub']
      ,
      buttons:['OK']

    });
    await alert.present();
    const result = alert.onDidDismiss();
  }
  async showMeThisImage(playerName: string)
  {
    const alert = await this.alertCtrl.create({
      header:playerName,
      message: `<img src="assets/icon/${playerName}.jpg" alt="g-maps" style="border-radius: 2px">`,
      buttons:['OK']

    });
    await alert.present();
    const result = alert.onDidDismiss();
  }

  sortModeChange(event: CustomEvent<SegmentChangeEventDetail>)
  {
    if(event.detail.value === 'Ascending')
    {
      this.sortedSubsAgainstOpponent = this.sortedSubsAgainstOpponent.reverse();
    }
    else
    {
      this.sortedSubsAgainstOpponent = this.sortedSubsAgainstOpponent.reverse();
    }
  }

  async getFirst3ScoringChances()
  {
    const alert = await this.alertCtrl.create({
      header:'Scored Goals Distribution',
      message: ' 1\'- 15\': '+ Math.round(this.scoredGoalsStatisticsAgainstOpponent[0]) +'%'+ '<br/>'+
       ' 16\'- 30\': '+ Math.round(this.scoredGoalsStatisticsAgainstOpponent[1])+'%'+ '<br/>'+
       ' 31\'- 45\': '+ Math.round(this.scoredGoalsStatisticsAgainstOpponent[2])+'%'+ '<br/>'+
       ' 46\'- 60\': '+ Math.round(this.scoredGoalsStatisticsAgainstOpponent[3])+'%'+ '<br/>'+
       ' 61\'- 75\': '+ Math.round(this.scoredGoalsStatisticsAgainstOpponent[4])+'%'+ '<br/>'+
       ' 76\'- 90\': '+ Math.round(this.scoredGoalsStatisticsAgainstOpponent[5])+'%'  ,
      buttons:['OK']

    });
    await alert.present();
    const result = alert.onDidDismiss();
  }

  async getFirst3ReceivingChances()
  {
    const alert = await this.alertCtrl.create({
      header:'Received Goals Distribution',
      message: ' 1\'- 15\': '+ Math.round(this.receivedGoalsStatisticsAgainstOpponent[0]) +'%'+ '<br/>'+
       ' 16\'- 30\': '+ Math.round(this.receivedGoalsStatisticsAgainstOpponent[1])+'%'+ '<br/>'+
       ' 31\'- 45\': '+ Math.round(this.receivedGoalsStatisticsAgainstOpponent[2])+'%'+ '<br/>'+
       ' 46\'- 60\': '+ Math.round(this.receivedGoalsStatisticsAgainstOpponent[3])+'%'+ '<br/>'+
       ' 61\'- 75\': '+ Math.round(this.receivedGoalsStatisticsAgainstOpponent[4])+'%'+ '<br/>'+
       ' 76\'- 90\': '+ Math.round(this.receivedGoalsStatisticsAgainstOpponent[5])+'%'  ,
      buttons:['OK']

    });
    await alert.present();
    const result = alert.onDidDismiss();
  }

  backButton()
  {
    this.navCtrl.back();
  }
}
