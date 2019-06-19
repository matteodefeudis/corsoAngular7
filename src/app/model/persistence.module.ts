import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdottiService } from './prodotti.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  //providers : [ProdottiService]
})
export class PersistenceModule { }
