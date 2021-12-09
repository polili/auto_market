import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketStatusRoutingModule } from './market-status-routing.module';
import { MarketStatusComponent } from './market-status.component';


@NgModule({
  declarations: [
    MarketStatusComponent
  ],
  imports: [
    CommonModule,
    MarketStatusRoutingModule
  ]
})
export class MarketStatusModule { }
