import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { VetrinaComponent } from './vetrina/vetrina.component';
import { PersistenceModule } from '@model/persistence.module';
import { DettaglioCarrelloComponent } from './dettaglio-carrello/dettaglio-carrello.component';
import { RouterModule, Route } from '@angular/router'
import { LoginErrorHandler } from './error-handler';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './log.interceptor';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatCardModule, MatBadgeModule, MatPaginatorModule } from '@angular/material';

const routes : Route[] = [
  {path:'vetrina',component:VetrinaComponent},
  {path:'dettaglio-carrello', component:DettaglioCarrelloComponent},
  {path:'admin', loadChildren:'./admin/admin.module#AdminModule'},
  {path:'**', redirectTo:'/vetrina'}
];

const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatBadgeModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [
    AppComponent,
    VetrinaComponent,
    DettaglioCarrelloComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PersistenceModule,
    RouterModule.forRoot(routes),
    PipesModule,
    DirectivesModule,
    materialModules
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : LogInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
