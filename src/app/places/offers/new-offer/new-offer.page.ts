import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form: FormGroup;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null,{
        updateOn : 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required,Validators.maxLength(180),Validators.minLength(5)]
      }),
      price: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required,Validators.min(1)]
      }),
      dateFrom:new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateTo: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      })
    }
    );
  }

  backButton()
  {
    this.navCtrl.navigateBack(['/','places','offers']);
  }

  createOffer()
  {
    console.log(this.form.value);
  }

}
