import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
// import { config } from '../assets/config.js';

// const key = config.API_KEY;
const key = '56b8aaad1e7173c8ca01c294273f9bd3';

@Injectable({
  providedIn: 'root'
})

export class FetchApiDataService {

  constructor(private http: HttpClient) {
  }

  getCurrent(lat: any, lng: any): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`).pipe(catchError(this.handleError));
  }

  getWeather(lat: any, lng: any): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${key}`).pipe(catchError(this.handleError));
  }

  getCity(city: any): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
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
