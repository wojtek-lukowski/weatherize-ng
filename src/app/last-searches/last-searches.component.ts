import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-last-searches',
  templateUrl: './last-searches.component.html',
  styleUrls: ['./last-searches.component.css']
})
export class LastSearchesComponent implements OnInit {

  @Input() lastSearches: string[] = [];
  @Output() setCity:EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  changeCity = (city: string) => {
    this.setCity.emit(city)
  }

}
