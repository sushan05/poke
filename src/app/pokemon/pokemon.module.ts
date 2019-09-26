import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';

import { Routes, RouterModule } from '@angular/router';

const route: Routes = [ {path: '', component: PokemonlistComponent} ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [PokemonlistComponent]
})
export class PokemonModule { }
