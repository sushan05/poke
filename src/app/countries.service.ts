import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  baseUrl = '//restcountries.eu/rest/v2/'

  constructor( private _http: HttpClient ) { }

  getAll(): Observable<any> {
    return this._http.get(this.baseUrl + 'all');
  }

  getCountryInfo(countryName: string) {
    return this._http.get(this.baseUrl + 'name/' + countryName + '?fulltext=true', {params: {fullText: 'true'}})
          .pipe(map(data => data[0]))
  }
}
