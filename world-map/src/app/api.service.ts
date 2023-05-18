import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private baseUrl = 'http://api.worldbank.org/v2';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    const url = `${this.baseUrl}/country/all`;
    return this.http.get(url);
  }
}