import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentLocationComponent } from './current-location/current-location.component';
import { HourlyDataComponent } from './hourly-data/hourly-data.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';
import { MatCardModule } from '@angular/material/card';
import { DailyComponent } from './daily/daily.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { LastSearchesComponent } from './last-searches/last-searches.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CurrentLocationComponent,
    HourlyDataComponent,
    DetailsComponent,
    DailyComponent,
    SearchComponent,
    LastSearchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
