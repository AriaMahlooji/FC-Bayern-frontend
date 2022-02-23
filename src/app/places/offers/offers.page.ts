import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[];

  constructor(private offersService: PlacesService, private navCtrl: NavController) { }

  ngOnInit() {
    this.offers = this.offersService.getPlaces();
  }


  backButton()
  {
    this.navCtrl.navigateBack(['/','places']);
  }
  goToNewOfferPage()
  {
    this.navCtrl.navigateForward(['/','places','offers','new']);
  }

  getDummyDate()
  {
    return new Date();
  }

}
