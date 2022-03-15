import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaceListComponent } from './places/place-list-component';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
