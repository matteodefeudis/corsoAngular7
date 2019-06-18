import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VetrinaComponent } from './vetrina/vetrina.component';
import { PersistenceModule } from './model/persistence.module';
import { DettaglioCarrelloComponent } from './dettaglio-carrello/dettaglio-carrello.component';
import { RouterModule, Route } from '@angular/router'

const routes : Route[] = [
  {path:'vetrina',component:VetrinaComponent},
  {path:'dettaglio-carrello', component:DettaglioCarrelloComponent},
  {path:'**', redirectTo:'/vetrina'}
];

@NgModule({
  declarations: [
    AppComponent,
    VetrinaComponent,
    DettaglioCarrelloComponent
  ],
  imports: [
    BrowserModule,
    PersistenceModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
