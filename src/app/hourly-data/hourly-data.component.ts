import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-hourly-data',
  templateUrl: './hourly-data.component.html',
  styleUrls: ['./hourly-data.component.css']
})
export class HourlyDataComponent implements OnInit {

  dailyCards:Array<any> = [];

  constructor(

    public fetchApiData: FetchApiDataService,

    @Inject(MAT_DIALOG_DATA)
    public data: {
      location: string,
      country: string,
      latitude: any,
      longitude: any
    }) { }


  ngOnInit(): void {
    this.fetchApiData.getWeather(this.data.latitude, this.data.longitude).subscribe((response: any) => {
      // console.log(response);
      // console.log(response.hourly);

      for(let i = 0; i < response.hourly.length; i++) {

        let card = {
          time: 1,
          temperature: '',
          sky: ''
        }
        
        card.time = i + 1;
        card.temperature = (response.hourly[i].temp - 273.15).toFixed(1);
        card.sky = response.hourly[i].weather[0].main;

        this.dailyCards.push(card)
      }

      console.log(this.dailyCards)

    });
  }






}
