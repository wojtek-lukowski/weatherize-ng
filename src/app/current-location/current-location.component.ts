import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Observable, throwError } from 'rxjs';
import { HourlyDataComponent } from '../hourly-data/hourly-data.component';
import { MatDialog } from '@angular/material/dialog';

// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.css']
})
export class CurrentLocationComponent implements OnInit {

  latitude: any = null;
  longitude: any = null;
  location: string = '';
  country: string = '';
  temperature: any = '';

  constructor(
    public fetchApiData: FetchApiDataService,
    // public dialog: MatDialog
    // public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.locate();
  }

  async locate() {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(position.coords);
        this.fetchApiData.getCurrent(this.latitude, this.longitude).subscribe((response: any) => {
          console.log(response);
          this.location = response.name;
          this.country = response.sys.country;
          this.temperature = (response.main.temp - 273.15).toFixed(1);
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  openHourlyDataDialog(): void {
    console.log('tu mialo byc otwarte okno');
    // this.dialog.open(HourlyDataComponent, {
    //   width: '600px'
    // });
  }


}
