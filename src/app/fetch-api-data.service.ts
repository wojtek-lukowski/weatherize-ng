import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
// import { config } from '../assets/config.js';

// const key = config.API_KEY;
const key = '56b8aaad1e7173c8ca01c294273f9bd3';

// async function locate() {
//   try {
//     navigator.geolocation.getCurrentPosition((position) => {
//       this.getCurrent(position.coords.latitude, position.coords.longitude);
//       localStorage.setItem('latitude', position.coords.latitude);
//       localStorage.setItem('longitude', position.coords.longitude);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

const apiUrl = 'https://weatherize-app.herokuapp.com/';
// const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`;
const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather`;
@Injectable({
  providedIn: 'root'
})

export class FetchApiDataService {

  constructor(private http: HttpClient) {
  }

  // async locate() {
  //   try {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const lat = position.coords.latitude;
  //       const lng = position.coords.longitude;
  //       this.getCurrent(lat, lng);
  //       // localStorage.setItem('latitude', position.coords.latitude);
  //       // localStorage.setItem('longitude', position.coords.longitude);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // public userRegistration
  //   (userDetails: any): Observable<any> {
  //   console.log(userDetails);
  //   return this.http.post(apiUrl + 'users', userDetails).pipe(catchError(this.handleError));
  // }

  getCurrent(lat: any, lng: any): Observable<any> {
    console.log('calling getCurrent');
    return this.http.get(apiUrl2 + `?lat=${lat}&lon=${lng}&appid=${key}`).pipe(catchError(this.handleError));
  }

  private extractResponseData(res: Response): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Bad luck: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body: ${error.error}`
      );
    }
    return throwError(
      'Bad luck'
    )
  }
}
