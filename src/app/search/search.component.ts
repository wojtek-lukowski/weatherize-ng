import { Component, Input, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  test: string = 'passed'
  
  city = '';
  cityCompleted = false;
  country = '';
  temperature = ''
  sky = '';
  lastSearches: string[] = []
  // isError = false
  
  constructor(
    public fetchApiData: FetchApiDataService,
    ) { }
    
    ngOnInit(): void {
      console.log('local storage:', localStorage.getItem('weatherize-lastSearches'))
      this.lastSearches = JSON.parse(localStorage.getItem('weatherize-lastSearches') || '[]').sort();
      console.log('test', this.test)
    }

  getLocationWeather = () => {
    if (!this.lastSearches.includes(this.city)) {
      this.lastSearches.push(this.city);
      localStorage.setItem('weatherize-lastSearches', JSON.stringify(this.lastSearches));
    }
    console.log(this.lastSearches)
    // this.isError = false

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

  setCity = (newCity: string) => {
    this.city = newCity;
    this.getLocationWeather();
  }


}
