import { Component, NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialog } from '@angular/material/dialog';
import { HourlyDataComponent } from './hourly-data/hourly-data.component';



// @NgModule({
//   declarations: [
//     DashboardComponent
//   ]
// });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'weatherize-ng';

  constructor(
    // public dialog: MatDialog
  ) { }

  // test(): void {
  //   console.log('where is the window?')
  //   //   this.dialog.open(HourlyDataComponent, {
  //   //     width: '600px'
  //   //   })
  // }
}
