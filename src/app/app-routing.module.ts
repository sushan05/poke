import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './admin.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';

import { Page404Component } from './page404/page404.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryResolverService } from './country-resolver.service';

const routes: Routes = [
    {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
    {path: 'pokemon', redirectTo: 'pokemons', pathMatch: 'full'},
    {path: 'pokemons', component: PokemonComponent},
    {
        path: 'countries',
        component: CountriesComponent,
        canActivate: [AdminGuard],
        children: [
            {
                path: ':name',
                component: CountryComponent, 
                resolve: [ CountryResolverService ],
                canDeactivate: [CanDeactivateGuard]
            }
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
