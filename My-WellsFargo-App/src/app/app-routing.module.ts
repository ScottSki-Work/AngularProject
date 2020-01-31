import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AcronymListComponent } from './acronym-list/acronym-list.component';
import { WorkWebsitesComponent } from './work-websites/work-websites.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'acronyms', component: AcronymListComponent},
  { path: 'workWebsites', component: WorkWebsitesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
