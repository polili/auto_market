import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MarketStatusRoutingModule } from './market-status-routing.module';
import { MarketStatusComponent } from './market-status.component';
import { VehicleStatisticsComponent } from './components/vehicle-statistics/vehicle-statistics.component';
import { MarketService } from './services/market.service';
import { MARKET_SERVICE } from './di';
import { ChartComponent } from './components/chart/chart.component';
import { VehicleProgressComponent } from './components/vehicle-progress/vehicle-progress.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  declarations: [
    MarketStatusComponent,
    VehicleStatisticsComponent,
    ChartComponent,
    VehicleProgressComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    IvyCarouselModule,
    MarketStatusRoutingModule
  ],
  providers: [
    { provide: MARKET_SERVICE, useClass: MarketService }
  ]
})
export class MarketStatusModule { }
