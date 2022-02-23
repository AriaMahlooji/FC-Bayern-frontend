import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;
  constructor(private navCtrl: NavController, private activeRoute: ActivatedRoute, private placesService: PlacesService) { }
  ngOnInit() {

    this.activeRoute.paramMap.subscribe(p =>
      {
        if(!p.has('placeId'))
          {
            this.navCtrl.navigateBack(['/','places','offers']);
            return;
          }
        else
        {
          this.place = this.placesService.getPlaces().find(place => place.id === p.get('placeId'));
        }
      });


  }

  backButton()
  {
    this.navCtrl.navigateBack(['/','places','offers']);
  }
}
