import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CountriesService } from './countries.service';

@Injectable({
  providedIn: 'root'
})
export class CountryResolverService implements Resolve<any> {
  constructor(private _countryService: CountriesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let countryName = route.params.name;
    return this._countryService.getCountryInfo(countryName);
  }
}
