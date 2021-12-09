import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MarketStatusRoutingModule } from './market-status-routing.module';
import { MarketStatusComponent } from './market-status.component';

@NgModule({
  declarations: [
    MarketStatusComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MarketStatusRoutingModule
  ]
})
export class MarketStatusModule { }
