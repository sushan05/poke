import { Component } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  todaysDate = new Date();
  amount = 100;
  countriesList: any = [];
  countriesObservable;
  color;
  countryName = '';
  noCountryFound = true;
  countryInfo;

  messages: any[] = ['Message 1'];
  messageMapping:
      {[k: string]: string} = {'=0': 'No messages.', '=1': 'One message.', 'other': '# messages.'};

  constructor(private _cntryService: CountriesService) {
    // this._cntryService.getCountries().subscribe((data) => {
    //   this.countriesList = data;
    //   console.log('country data ', data);
    // });

    this.countriesObservable = this._cntryService.getCountries();

    console.log("todays date is ", this.todaysDate);
  }

  searchCountry() {
    if(!this.countryName) {
      this.noCountryFound = true;
      return;
    }

    this._cntryService.getCountry(this.countryName).subscribe(data => {
        this.noCountryFound = false;
        this.countryInfo = data[0];
    });
  }
}
