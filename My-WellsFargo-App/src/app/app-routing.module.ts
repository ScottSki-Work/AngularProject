import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AcronymListComponent } from './acronym-list/acronym-list.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'acronyms', component: AcronymListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
