import { isExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
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
  lastSearches: string[] = []
  isError = false
  
  constructor(
    public fetchApiData: FetchApiDataService,
    ) { }
    
    ngOnInit(): void {
      console.log('local storage:', localStorage.getItem('weatherize-lastSearches'))
      this.lastSearches = JSON.parse(localStorage.getItem('weatherize-lastSearches') || '[]');
    }

  getLocationWeather = () => {
    if (!this.lastSearches.includes(this.city) && this.city !==' ') {
      this.lastSearches.push(this.city);
      this.lastSearches.sort();
      localStorage.setItem('weatherize-lastSearches', JSON.stringify(this.lastSearches));
    }
    console.log(this.lastSearches)
    this.isError = false

    this.fetchApiData.getCity(this.city).subscribe((response: any) => {
      console.log(response);
      this.country = response.sys.country;
      this.temperature = (response.main.temp - 273.15).toFixed(1)
      this.sky = response.weather[0].main
    },error =>{
    console.error(error);
    this.isError = true;
    this.lastSearches.pop()
    }, () =>{
      // console.error("complete");
    });
    this.cityCompleted = true;
  };

  clearData = () => {
    this.cityCompleted = false;
    this.city = '';
    this.temperature = '';
    this.sky = '';
    this.isError = false;
    this.lastSearches = JSON.parse(localStorage.getItem('weatherize-lastSearches') || '[]').sort();
  }

  setCity = (newCity: string) => {
    console.log('setCity called')
    this.city = newCity;
    this.getLocationWeather();
  }


}
