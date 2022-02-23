/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core/dist/types/components/segment/segment-interface';

@Component({
  selector: 'app-substitutions',
  templateUrl: './substitutions.page.html',
  styleUrls: ['./substitutions.page.scss'],
})
export class SubstitutionsPage implements OnInit {
  sortMode = 'Descending';
  chosenSeason;
  sortedSubsInSeason;
  tempSortedSeason;
  constructor(private http: HttpClient, private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
    this.chosenSeason = '2013-2014';
    this.http.get('http://localhost:8105/getSortedSubsIn/?season='+this.chosenSeason).
    subscribe(
      data=>{
        console.log(data);
        this.sortedSubsInSeason = data;
      }
    );
  }

  filterSubsBasedOnSeason(event: CustomEvent<SegmentChangeEventDetail>)
  {
    this.chosenSeason = event.detail.value;
    this.http.get('http://localhost:8105/getSortedSubsIn/?season='+this.chosenSeason).
    subscribe(
      data=>{
        console.log(data);
        this.sortedSubsInSeason = data;
        if(this.sortMode==='Ascending')
        {
          this.sortMode ='Descending';
          this.sortedSubsInSeason = this.sortedSubsInSeason.reverse();
        }
        this.sortMode = 'Descending';
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
      subHeader: 'Opponent: ' + substitution['Opponent'],
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
      this.sortedSubsInSeason = this.sortedSubsInSeason.reverse();
      if(event.detail.value === 'Ascending')
      {
        this.sortMode = 'Ascending';
      }
      else
      {
        this.sortMode = 'Descending';
      }
  }

  backButton()
  {
    this.navCtrl.navigateBack(['/','places']);
  }

}
