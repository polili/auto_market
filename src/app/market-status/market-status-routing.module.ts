import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketStatusComponent } from './market-status.component';

const MARKET_STATUS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MarketStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(MARKET_STATUS_ROUTES)],
  exports: [RouterModule]
})
export class MarketStatusRoutingModule { }
