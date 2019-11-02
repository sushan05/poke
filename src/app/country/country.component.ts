import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country;
  constructor(private _actRoute: ActivatedRoute, private _countryService: CountriesService) { }

  ngOnInit() {
    // let countryName = this._actRoute.snapshot.params.name;
    // this.getCountryInfo(countryName);

    console.log('queryparm = ', this._actRoute.snapshot.queryParams);

    this._actRoute.params.subscribe(data => {
      this.getCountryInfo(data.name);
    });

    this._actRoute.queryParams.subscribe(qdata => {
      console.log("querparm in subscribtion ", qdata);
      
    })
  }

  getCountryInfo(countryName: string) {
    this._countryService.getCountryInfo(countryName).subscribe(data => {
      this.country = data;
      console.log(this.country);
      
    })
  }
}
