import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent  {

  vehicle = {
    model: 'BMW 3 Series Gran Limousine',
    picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
    mileage: '113,000 KM',
    temperature: 'Auto',
    place: 'Ottawa',
    fuelType: 'Petrol',
    statistics: [
      { name: 'Searched', number: '7.5 k' },
      { name: 'Visited', number: '17.2 k' },
      { name: 'Sold', number: '1.5 k' }
    ]
  }

}
