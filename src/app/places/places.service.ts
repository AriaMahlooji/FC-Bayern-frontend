import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] =[

    // eslint-disable-next-line max-len
    new Place('p1','Esfahan City', 'One of the most attractive places for tourists','assets/icon/esfahan.jpg',150,new Date('2020-12-1'),new Date('2021-5-30')),
    new Place('p2','Shiraz City', 'City of Culture and history','assets/icon/shiraz.jpg',250,new Date('2020-12-1'),new Date('2021-5-30') ),
    // eslint-disable-next-line max-len
    new Place('p3','Yazd City', 'City of Unique persian architecture','assets/icon/yazd.jpg',149,new Date('2020-12-1'),new Date('2021-5-30') )
  ];

  constructor() { }

  getPlaces()
  {
    return this.places;
  }
  getPlace(id: string)
  {
    return this.places.find(m=>m.id === id);
  }

}
