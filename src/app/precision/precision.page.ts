import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-precision',
  templateUrl: './precision.page.html',
  styleUrls: ['./precision.page.scss'],
})
export class PrecisionPage implements OnInit {

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  async showMeThisImage(url: string)
  {
    const alert = await this.alertCtrl.create({
      header: 'Real Match',
      message: `<img src=${url} alt="g-maps" style="border-radius: 2px">`,
      buttons:['OK']

    });
    await alert.present();
    const result = alert.onDidDismiss();
  }
  backButton()
  {
    this.navCtrl.navigateBack(['/','places']);
  }

}
