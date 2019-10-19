import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { PokeServiceInterceptor } from './http-interceptor.service';
import { NewInterceptorService } from './new-interceptor.service';

const appRoutes: Routes = [
  {path: '', component: CountriesComponent}
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
    CountriesComponent,
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: PokeServiceInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: NewInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
