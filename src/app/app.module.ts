import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { HelloComponent } from './hello/hello.component';
import { BlogComponent } from './blog/blog.component';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './list/list.component';

import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from './services/countries.service';
import { HighlightDirective } from './highlight.directive';
import { MarqueeDirective } from './marquee.directive';
import { CountryregionalblocsPipe } from './countryregionalblocs.pipe';

const appRoutes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'countries', component: CountriesComponent},

]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BlogComponent,
    UsersComponent,
    ListComponent,
    CountriesComponent,
    HighlightDirective,
    MarqueeDirective,
    CountryregionalblocsPipe
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
