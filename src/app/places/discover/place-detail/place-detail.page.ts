import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;
  constructor(private router: Router, private navCtrl: NavController, private modalCtrl: ModalController,
    private route: ActivatedRoute, private placesService: PlacesService, private actionSheetCtrl: ActionSheetController) { }
  ngOnInit() {
    this.route.paramMap.subscribe(pM=>{
      if(!pM.has('placeId')){
        this.navCtrl.navigateBack('/places/discover');
        return;
      }
      this.place = this.placesService.getPlace(pM.get('placeId'));
    });
  }

  onBookPlace()
  {

    this.actionSheetCtrl.create({
      header: 'Choose an Action',
      buttons:[
        {text:'Select',handler:()=>{this.openBookingModalCtrl('select');}}
        ,{text:'Random',handler:()=>{this.openBookingModalCtrl('random');}}
        ,{text:'Cancel',role:'destructive'}
      ]
    }).then(el=> el.present());
   // this.router.navigate(['/','places','discover']);
  // this.navCtrl.navigateBack(['/','places','discover']);
  }
  openBookingModalCtrl(mode: 'select'|'random')
  {
    this.modalCtrl.create(
      {component:CreateBookingComponent,componentProps:{selectedPlace: this.place, selectedMode: mode},id:'bookingModal'}
      )
      .then(m =>{
           m.present();
           return m.onDidDismiss();
        })
      .then(resultData =>
        console.log(resultData)
        )
        ;
  }
  backButton()
  {
    this.navCtrl.navigateBack(['/','places','discover']);
  }
}
