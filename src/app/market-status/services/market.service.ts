import { Injectable, } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VehicleStatistics, IMarket } from '../domain';

@Injectable()
export class MarketService implements IMarket {

  getVehicleStatistics(): Observable<Array<VehicleStatistics>> {
    return of([{
      logo: '',
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      fuelType: 'Petrol',
      areas: [
        { name: 'Searched', number: '7.5 k' },
        { name: 'Visited', number: '17.2 k' },
        { name: 'Sold', number: '71.0 k' }
      ]
    }, {
      logo: '',
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      fuelType: 'Petrol',
      areas: [
        { name: 'Searched', number: '7.5 k' },
        { name: 'Visited', number: '17.2 k' },
        { name: 'Sold', number: '71.0 k' }
      ]
    }, {
      logo: '',
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      fuelType: 'Petrol',
      areas: [
        { name: 'Searched', number: '7.5 k' },
        { name: 'Visited', number: '17.2 k' },
        { name: 'Sold', number: '71.0 k' }
      ]
    }, {
      logo: '',
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      fuelType: 'Petrol',
      areas: [
        { name: 'Searched', number: '7.5 k' },
        { name: 'Visited', number: '17.2 k' },
        { name: 'Sold', number: '71.0 k' }
      ]
    }, {
      logo: '',
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      fuelType: 'Petrol',
      areas: [
        { name: 'Searched', number: '7.5 k' },
        { name: 'Visited', number: '17.2 k' },
        { name: 'Sold', number: '71.0 k' }
      ]
    }, {
      logo: '',
      picture: 'https://png2.cleanpng.com/sh/bc974cd0a3165a836c5080c555e09efe/L0KzQYm3VsA1N6twe5H0aYP2gLBuTgRwgZD5eZ9BaXB2PbTokr1pgaZzfNNyLYPkfsXoTfZmNZlAjdDtYXmweYS3TcVjOWY6TaIAZXO3crWCTsgzQWE6SaoEMUW1SIK5VMY4P2o7T6s3cH7q/kisspng-toyota-vios-car-hyundai-santa-fe-hyundai-i30-5b155505ec4bd9.8290518915281246779679.png',
      fuelType: 'Petrol',
      areas: [
        { name: 'Searched', number: '7.5 k' },
        { name: 'Visited', number: '17.2 k' },
        { name: 'Sold', number: '71.0 k' }
      ]
    }]);
  }
}
