import { Component, NgModule, HostListener } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialog } from '@angular/material/dialog';
import { HourlyDataComponent } from './hourly-data/hourly-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Weatherize';

    @HostListener('document:scroll', []) onClick() {
    console.log('scroll')
  }

  constructor(
  ) { }

}
