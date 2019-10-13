import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello/hello.component';
import { BlogComponent } from './blog/blog.component';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './list/list.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PincodeValidatorDirective } from './pincode-validator.directive';

const appRoutes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'hello', component: HelloComponent}
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BlogComponent,
    UsersComponent,
    ListComponent,
    TemplateDrivenFormComponent,
    PincodeValidatorDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
