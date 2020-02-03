import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcronymListComponent } from './acronym-list/acronym-list.component';
import { WorkWebsitesComponent } from './work-websites/work-websites.component';
import { TwoWayInputComponent } from './two-way-input/two-way-input.component';
import { TwoWayOutputComponent } from './two-way-output/two-way-output.component';

@NgModule({
  declarations: [
    AppComponent,
    AcronymListComponent,
    WorkWebsitesComponent,
    TwoWayInputComponent,
    TwoWayOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
