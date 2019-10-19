import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private _countryService: CountriesService) { }

  ngOnInit() {
    this._countryService.getAll().subscribe((data) => {
      console.log('checkking data', data);
    });

    this._countryService.search('india').subscribe((data) => {
      console.log('checkking data', data);
    });

    this._countryService.currencyCountries('usd').subscribe((data) => {
      console.log('checkking data', data);
    });
  }

  onSubmit() {
    const comment = {
      title: 'New Post on 19th Oct',
      body: 'Hello Friends, chai pee loo',
      userId: 102
    };

    this._countryService.postComments(comment)
                        .subscribe(data => {
                          console.log('checking response for posted data ', data);
                        });
  }

}
