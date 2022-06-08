import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

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
      console.log(response);
      console.log(response.daily);

      for(let i = 0; i < response.daily.length; i++) {

        let card = {
          time: 1,
          temperature: '',
          sky: ''
        }
        
        card.time = i + 1;
        card.temperature = (response.daily[i].temp.day - 273.15).toFixed(1);
        card.sky = response.daily[i].weather[0].main;

        this.dailyCards.push(card)
      }

      console.log(this.dailyCards)

    });
  }






}
