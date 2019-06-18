import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VetrinaComponent } from './vetrina/vetrina.component';
import { PersistenceModule } from './model/persistence.module';

@NgModule({
  declarations: [
    AppComponent,
    VetrinaComponent
  ],
  imports: [
    BrowserModule,
    PersistenceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
