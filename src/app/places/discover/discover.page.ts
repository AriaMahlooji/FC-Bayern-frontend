import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
 loadedPlaces: Place[];
  constructor(private placesService: PlacesService, private navCtrl: NavController) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.getPlaces();

  }

  backButton()
  {
    this.navCtrl.navigateBack(['/','places']);
  }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>)
  {
    console.log(event.detail.value);
  }

}
