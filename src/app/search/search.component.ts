import { Component, Input, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  city = '';
  cityCompleted = false;
  country = '';
  temperature = ''
  sky = '';
  isError = false

  constructor(
    public fetchApiData: FetchApiDataService,
  ) { }

  ngOnInit(): void {
  }

  getLocationWeather = () => {
    this.isError = false

    this.fetchApiData.getCity(this.city).subscribe((response: any) => {
      console.log(response);

      this.country = response.sys.country;
      this.temperature = (response.main.temp - 273.15).toFixed(1)
      this.sky = response.weather[0].main
    })
    this.cityCompleted = true;
  };

  clearData = () => {
    console.log('hideCity')
    this.cityCompleted = false;
    this.city = '';
    this.temperature = '';
    this.sky = '';
  }

}
