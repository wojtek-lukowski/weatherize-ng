import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      location: string,
      country: string,
      temperature: any,
      sky: string,
      feelsLike: any,
      tempMax: any,
      tempMin: any,
      windSpeed: any,
      windDirection: any
    }) { }

  ngOnInit(): void {
  }

}
