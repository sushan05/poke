import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello/hello.component';
import { BlogComponent } from './blog/blog.component';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BlogComponent,
    UsersComponent,
    ListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
