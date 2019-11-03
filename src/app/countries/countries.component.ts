import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countriesData = [];

  constructor ( 
    private _countryService: CountriesService, 
    private _router: Router,
    private _acRoutes: ActivatedRoute
  ) { }

  ngOnInit() {
    this._countryService.getAll().subscribe(data => {
      this.countriesData = [...data];
    });
  }

  doNavigation(countryName): void {
    this._router.navigate(['/countries', countryName]);
  }
}
