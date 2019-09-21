import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://restcountries.eu/rest/v2/';

@Injectable()
export class CountriesService {
    constructor(private _httpClient: HttpClient) {}

    getCountries(): Observable<any> {
        return this._httpClient.get(apiUrl + 'all');
    }

    getCountry(cntryName: string): Observable<any> {
        return this._httpClient.get(apiUrl + 'name/' + cntryName + '?fullText=true');
    }
}