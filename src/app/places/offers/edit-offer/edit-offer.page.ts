import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  idOfThisPage: string;
  place: Place;
  form: FormGroup;
  constructor(private navCtrl: NavController, private activeRoute: ActivatedRoute, private placesService: PlacesService) {


   }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(p=>{

      if(!p.has('placeId'))
      {
        return;
      }
      else
      {
        this.idOfThisPage = p.get('placeId');
        this.place = this.placesService.getPlace(this.idOfThisPage);
        this.form = new FormGroup({
          title: new FormControl(this.place.title,{
            updateOn : 'blur',
            validators: [Validators.required]
          }),
          description: new FormControl(this.place.description,{
            updateOn: 'blur',
            validators: [Validators.required,Validators.maxLength(180),Validators.minLength(5)]
          }),
        });
      }

    });
  }

  backButton()
  {
      this.navCtrl.navigateBack(['/','places','offers']);
  }

  onSaveOffer()
  {
    if(this.form.valid)
    {
      console.log(this.form.value);
    }
    else
    {
      console.log('check the inputs');
    }
  }
}
