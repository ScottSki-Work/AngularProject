import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcronymListComponent } from './acronym-list/acronym-list.component';
import { WorkWebsitesComponent } from './work-websites/work-websites.component';

@NgModule({
  declarations: [
    AppComponent,
    AcronymListComponent,
    WorkWebsitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
