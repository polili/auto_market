import { Component } from '@angular/core';
import { VehicleProgress } from '../../domain';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent  {

  vehicles: Array<VehicleProgress> = [
    {
      make: 'BMW', 
      progress: 95,
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      isTop: true
    },
    {
      make: 'Toyota', 
      progress: 82,
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      isTop: false
    },
    {
      make: 'Honda', 
      progress: 34,
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      isTop: false
    },
    {
      make: 'Chevrolet', 
      progress: 46,
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      isTop: false
    },{
      make: 'Volkswagen', 
      progress: 73,
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      isTop: false
    },
    {
      make: 'Skoda', 
      progress: 24,
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      isTop: false
    },
    {
      make: 'Nissan', 
      progress: 55,
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      isTop: false
    }
  ];

}
