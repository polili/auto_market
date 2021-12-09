import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MARKET_SERVICE } from './di';
import { IMarket, VehicleStatistics } from './domain';

@Component({
  selector: 'app-market-status',
  templateUrl: './market-status.component.html',
  styleUrls: ['./market-status.component.scss']
})
export class MarketStatusComponent implements OnInit {

  vehicles$: Observable<Array<VehicleStatistics>> | null = null;

  constructor(
    @Inject(MARKET_SERVICE) private marketService: IMarket
  ) { }

  ngOnInit(): void {
    this.vehicles$ = this.marketService.getVehicleStatistics();
  }
}
