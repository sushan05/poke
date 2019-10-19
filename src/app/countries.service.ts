import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const baseUrl = '//restcountries.eu/rest/v2/';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http: HttpClient) {}

  getAll() {
    return this._http.get(baseUrl + 'alllllll')
            .pipe(
              map((data: Array<any>) => {
                data.forEach(contryData => {
                  contryData['name'] = contryData['name'].toUpperCase();
                });

                return data;
              })
            );
  }

  search(countryName: string) {
    return this._http.get(baseUrl + 'name/' + countryName );
  }

  currencyCountries(curCode: string) {
    return this._http.get(baseUrl + 'currency/'+ curCode);
  }

  postComments(commentBody): any {
    const apiUrl = '//jsonplaceholder.typicode.com/posts';

    return this._http.post(apiUrl, commentBody);
  }
}
