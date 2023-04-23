import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuneComponent } from './components/tune/tune.component';
import { SetComponent } from './components/set/set.component';
import {HttpClientModule} from "@angular/common/http";
import { TunesComponent } from './components/tunes/tunes.component';
import { SetsComponent } from './components/sets/sets.component';

@NgModule({
  declarations: [
    AppComponent,
    TuneComponent,
    SetComponent,
    TunesComponent,
    SetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
