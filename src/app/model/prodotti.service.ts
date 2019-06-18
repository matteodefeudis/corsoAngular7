import { Injectable } from '@angular/core';
import { PersistenceModule } from './persistence.module';
import { Prodotto } from './prodotto';

@Injectable({providedIn:PersistenceModule})
export class ProdottiService {

  constructor() { }

  private prodotti : Prodotto[] = [
    {id:1,nome:'Il Nome della Rosa',categoria:'Libri',prezzo:10,descrizione:'Best Seller di Umberto Eco'},
    {id:2,nome:'La Divina Commedia',categoria:'Libri',prezzo:200,descrizione:'Best Seller di Dante Alighieri'},
    {id:3,nome:'L\'Attimo fuggente',categoria:'Film',prezzo:20,descrizione:'Film con Robin Williams'},
    {id:4,nome:'La Pantera Rosa',categoria:'Film',prezzo:10,descrizione:'Film commedia'},
    {id:5,nome:'iPhone XS',categoria:'Smartphone',prezzo:1000,descrizione:'Ultimo modello di Apple'}
  ];

  getProdotti(categoria? : string) : Prodotto[] {
    if(categoria){
      //sintassi classica
      //function(prod){return prod.categoria==categoria}
      //sintassi lambda
      return this.prodotti.filter((prod)=>prod.categoria==categoria);
    } else
      return this.prodotti;
  }

  //restituisce le categorie dell'array prodotti senza ripetizioni
  getCategorie() : string[]{
    let cat = [];
    this.prodotti.map(
      (prod)=>prod.categoria
      ).forEach((categoria)=>{
        if(cat.indexOf(categoria)==-1)
        cat.push(categoria);
      });
      console.log(cat);
      return cat;
  }

}
