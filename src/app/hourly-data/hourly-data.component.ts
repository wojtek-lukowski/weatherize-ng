import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hourly-data',
  templateUrl: './hourly-data.component.html',
  styleUrls: ['./hourly-data.component.css']
})
export class HourlyDataComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string
    }) { }

  ngOnInit(): void {
  }

}
