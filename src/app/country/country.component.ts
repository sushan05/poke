import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from '../countries.service';
import { CanComponentDeactivate } from '../can-deactivate.guard';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, CanComponentDeactivate {
  country;
  shouldLeave = false;
  constructor(private _actRoute: ActivatedRoute, private _countryService: CountriesService) { }

  ngOnInit() {
    this._actRoute.data.subscribe(data => {
      this.country = data[0];
    })
  }

  canDeactivate(): boolean {
    if (!this.shouldLeave) {
      alert('You cannot leave this page');
      return false;
    }

    return true;
  }
}
