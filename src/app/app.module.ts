import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CountryComponent } from './country/country.component';
import { Page404Component } from './page404/page404.component';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PokemonComponent,
    CountryComponent,
    Page404Component,
    CountriesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
