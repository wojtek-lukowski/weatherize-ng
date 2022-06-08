import { Component, Injectable, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Observable, throwError } from 'rxjs';
import { HourlyDataComponent } from '../hourly-data/hourly-data.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.css']
})

export class CurrentLocationComponent implements OnInit {

  latitude: any = null;
  longitude: any = null;
  location: string = '';
  country: string = '';
  temperature: any = '';
  sky: string = '';
  feelsLike: any = null;
  tempMax: any = '';
  tempMin: any = '';
  windSpeed: any ='';
  windDirection: any = '';

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    // public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.locate();
  }

  async locate() {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(position.coords);
        this.fetchApiData.getCurrent(this.latitude, this.longitude).subscribe((response: any) => {
          console.log(response);
          this.location = response.name;
          this.country = response.sys.country;
          this.temperature = (response.main.temp - 273.15).toFixed(1);
          this.sky = response.weather[0].main
          this.feelsLike = (response.main.feels_like - 273.15).toFixed(1);
          this.tempMax = (response.main.temp_max - 273.15).toFixed(1),
          this.tempMin = (response.main.temp_min - 273.15).toFixed(1),
          this.windSpeed = response.wind.speed.toFixed(1)

          let windD = response.wind.deg;

          if (windD > 348 || windD <= 11) { windD = "N" };
          if (windD > 11 && windD <= 33) { windD = "NNE" };
          if (windD > 33 && windD <= 56) { windD = "NE" };
          if (windD > 56 && windD <= 78) { windD = "ENE" };
          if (windD > 78 && windD <= 101) { windD = "E" };
          if (windD > 101 && windD <= 123) { windD = "ESE" };
          if (windD > 123 && windD <= 146) { windD = "SE" };
          if (windD > 146 && windD <= 168) { windD = "SSE" };
          if (windD > 168 && windD <= 191) { windD = "S" };
          if (windD > 191 && windD <= 213) { windD = "SSW" };
          if (windD > 213 && windD <= 236) { windD = "SW" };
          if (windD > 236 && windD <= 258) { windD = "WSW" };
          if (windD > 258 && windD <= 281) { windD = "W" };
          if (windD > 281 && windD <= 303) { windD = "NWN" };
          if (windD > 303 && windD <= 326) { windD = "NW" };
          if (windD > 326 && windD <= 348) { windD = "NNW" };
    
          this.windDirection = windD

        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  openHourlyDialog(
    location: string,
    country: string,
    latitude: any,
    longitude: any
    ): void {
    console.log(this.location);
    this.dialog.open(HourlyDataComponent, {
      data: {
        location,
        country,
        latitude,
        longitude
      },
      width: '600px'
    });
  }


  openDetailsDialog(
    location: string,
    country: string,
    temperature: any,
    sky: string,
    feelsLike: any,
    tempMax: any,
    tempMin: any,
    windSpeed: any,
    windDirection: any
    ): void {
    console.log(this.location);
    this.dialog.open(DetailsComponent, {
      data: {
        location,
        country,
        temperature,
        sky,
        feelsLike,
        tempMax,
        tempMin,
        windSpeed,
        windDirection
      },
      width: '600px'
    });
  }



}
