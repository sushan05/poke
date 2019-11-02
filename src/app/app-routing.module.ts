import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from './page404/page404.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
    {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
    {path: 'pokemon', redirectTo: 'pokemons', pathMatch: 'full'},
    {path: 'pokemons', component: PokemonComponent},
    {
        path: 'countries',
        component: CountriesComponent, 
        children: [
            {path: ':name', component: CountryComponent}
        ],
    },
    // {path: 'countries/:name', component: CountryComponent},
    {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
