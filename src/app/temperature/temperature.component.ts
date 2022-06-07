import { Component, Inject, OnInit, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})


export class TemperatureComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      temperature: number
    }
  ) { }

  ngOnInit(): void {
  }

}
