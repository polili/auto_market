import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';
import { CORE_COMPONENTS } from './core/components';

@NgModule({
  declarations: [
    AppComponent,
    ...CORE_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
