import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../components/models/country.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl = 'https://restcountries.eu/rest/v2/all?fields=name;capital';
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient){ }

  getCountryList(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}`);
  }
}