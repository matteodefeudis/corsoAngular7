import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../model/prodotto';
import { ProdottiService } from '../model/prodotti.service';
import { Carrello } from '../model/carrello';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-vetrina',
  templateUrl: './vetrina.component.html',
  styleUrls: ['./vetrina.component.css']
})
export class VetrinaComponent implements OnInit {

  /*prodotti : Prodotto[] = [
    {id:1,nome:'Il Nome della Rosa',categoria:'Libri',prezzo:10,descrizione:'Best Seller di Umberto Eco'},
    {id:2,nome:'La Divina Commedia',categoria:'Libri',prezzo:200,descrizione:'Best Seller di Dante Alighieri'},
    {id:3,nome:'L\'Attimo fuggente',categoria:'Film',prezzo:20,descrizione:'Film con Robin Williams'},
    {id:4,nome:'La Pantera Rosa',categoria:'Film',prezzo:10,descrizione:'Film commedia'},
    {id:5,nome:'iPhone XS',categoria:'Smartphone',prezzo:1000,descrizione:'Ultimo modello di Apple'}
  ];*/

  constructor(
    private prodottiService : ProdottiService,
    public carrello : Carrello
  ) { }

    ngOnInit() {
      this.prodottiService.loadProdotti();
    }
    
  categoriaSelezionata : string;

  get prodotti() : Prodotto[]{
    return this.prodottiService.getProdotti(this.categoriaSelezionata);
  }

  get categorie() : string[]{
    return this.prodottiService.getCategorie();
  }

  confrontaPerPrezzo(p1 : Prodotto, p2 : Prodotto):number{
    return p1.prezzo - p2.prezzo;
  }

  indicePagina : number = 0;
  prodottiPerPagina : number =3;

  gestisciPaginazione(evento : PageEvent){
    this.indicePagina = evento.pageIndex;
    this.prodottiPerPagina = evento.pageSize;
  }

  getProdottiPaginati(){
    return this.prodottiService
    .getProdotti(this.categoriaSelezionata)
    .slice(
      this.indicePagina * this.prodottiPerPagina,
      (this.indicePagina+1) * this.prodottiPerPagina
    );
  }

}
