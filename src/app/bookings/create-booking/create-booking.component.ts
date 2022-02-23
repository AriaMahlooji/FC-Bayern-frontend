import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
@Input() selectedPlace: Place;
@Input() selectedMode: string;
@ViewChild('bookingForm',{static: true}) bookingFormElement: NgForm;
startDate: Date;
endDate: Date;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    if(this.selectedMode === 'random')
    {
      this.startDate = new Date();
      this.endDate = new Date(this.startDate.getDay()+4);
    }
  }

  onClose()
  {
    this.modalCtrl.dismiss(null,'close','bookingModal');
  }
  onBookingPlace()
  {
    this.modalCtrl.dismiss({message : 'Dymmy message'},'confirm','bookingModal');
  }

  datesValidation()
  {
    return this.bookingFormElement.value['date-from'] < this.bookingFormElement.value['date-to'];
  }

}
